import React, {useState} from 'react'

import { toast } from 'react-hot-toast'

import Display from '../components/retratos/Display'
import Gallery from '../components/retratos/Gallery' 

import './Retratos.css'

const database = {
  db: undefined
} 

function IniciarDB(){
    var gallery = indexedDB.open("gallery",2)
    gallery.addEventListener("error", MostrarError)
    gallery.addEventListener("success", Comenzar)
    gallery.addEventListener("upgradeneeded", CrearAlmacen)
}

function MostrarError(event){
    toast.error(`ERROR : ${event.code} / ${event.message}`)
}

function Comenzar(event){
    toast.success("Galería cargada",{
      position: "bottom-center"
    })
    database.db = event.target.result
}

function CrearAlmacen(event){
    var database = event.target.result
    var almacen = database.createObjectStore("Gallery", {keyPath: "id"})
    almacen.createIndex("created","created",{unique:false})
    var preview = database.createObjectStore("Preview", {keyPath: "id"})
    preview.createIndex("created","created", {unique:false})
}

export default function Retratos() {

  const[ done, setDone] = useState(false)
  const [gallery, setGallery] = useState([])
  const [preview, setPreview] = useState([])
    
    const aux = {
        gallery : [],
        preview : []
    }

    // Gallery functions

    function MostrarImagenesGallery(event){
        var puntero = event.target.result
        if(puntero){
            aux.gallery.push(puntero.value)
            puntero.continue()
        } else {
            setGallery([...aux.gallery])
        }
    }

    function MostrarGallery(){
        aux.gallery = []
        var transaccion = database.db.transaction(["Gallery"])
        var almacen = transaccion.objectStore("Gallery")
        var indice = almacen.index("created")
        var puntero = indice.openCursor()
        puntero.addEventListener("success", MostrarImagenesGallery)
    }

    function AlmacenarImagen(object){
        // data
        var transaccion = database.db.transaction(["Gallery"],"readwrite")
        var almacen = transaccion.objectStore("Gallery")
        almacen.add(object)
    } 

    function EliminarImagen(id){
        var transaccion = database.db.transaction(["Gallery","Preview"],"readwrite")
        
        var almacen = transaccion.objectStore("Gallery")
        var solicitud = almacen.delete(id)
        MostrarGallery()

        var almacen = transaccion.objectStore("Preview")
        var solicitud = almacen.delete(id)
        MostrarPreview()
    }

    function ActualizarImagen(object){
      var transaccion = database.db.transaction(["Gallery"],"readwrite")
        var almacen = transaccion.objectStore("Gallery")
        almacen.put(object)
      MostrarGallery()
    }

    function BuscarID(id){
      let result = gallery.filter((e) => e.id == id)[0]
      return result
    }

    // Preview functions
    function MostrarImagenesPreview(event){
      const puntero_1 = event.target.result
      if(puntero_1){
        aux.preview.push(puntero_1.value)
        puntero_1.continue()
      } else {
        setPreview([...aux.preview])
      }
    }

    function MostrarPreview(){
        aux.preview = []
        var transaccion = database.db.transaction(["Preview"])
        var almacen = transaccion.objectStore("Preview")
        var indice = almacen.index("created")
        var puntero = indice.openCursor()
        puntero.addEventListener("success", MostrarImagenesPreview)
    }

    function addImagetoPreview(object){
        var transaccion = database.db.transaction(["Preview"],"readwrite")
        var almacen = transaccion.objectStore("Preview")
        const value = {
          id: object.id,
          created: Date.now()
        }
        almacen.add(value)
        MostrarPreview()
        toast.success("Imagen cargada a Proyeccion",{position: "bottom-center"})
    }

    function removeImagetoPreview(id){
      var transaccion = database.db.transaction(["Preview"],"readwrite")
      var almacen = transaccion.objectStore("Preview")
      
      var solicitud = almacen.delete(id)
      MostrarPreview()
    }


  if(!done) {
    IniciarDB()
    setTimeout(() => {
      MostrarGallery()
      MostrarPreview()
      toast.success("Imagenes cargadas", {
        position:"bottom-center"
      })
    }, 1000)
    setDone(true)
  }
  

  const GalleryFunctions = {
    Mostrar : MostrarGallery,
    Almacenar : AlmacenarImagen,
    Eliminar: EliminarImagen,
    Subir: addImagetoPreview,
    Actualizar : ActualizarImagen,
  }

  const DisplayFunctions = {
    Mostrar : MostrarPreview,
    Eliminar : removeImagetoPreview,
    Buscar: BuscarID,
  }

  return (
    <div className="frame-canvas">
        <Display preview={preview} functions={DisplayFunctions}/>
        <hr />
        <Gallery gallery={gallery} functions={GalleryFunctions}/>
    </div>
  )
}
