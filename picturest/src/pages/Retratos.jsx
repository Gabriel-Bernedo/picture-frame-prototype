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
    toast.success("Galería correctamente cargada")
    database.db = event.target.result
}

function CrearAlmacen(event){
    var database = event.target.result
    var almacen = database.createObjectStore("Gallery", {keyPath: "id"})
    var preview = database.createObjectStore("Preview", {keyPath: "id"})
    preview.createIndex("index","index", {unique:true})
}

export default function Retratos() {

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

        var puntero = almacen.openCursor()
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

    // Preview functions
    function MostrarImagenesPreview(event){
      const puntero_1 = event.target.result
      if(puntero_1){
        var transaccion = database.db.transaction(["Gallery"])
        var almacen = transaccion.objectStore("Gallery")

        var rango = IDBKeyRange.only(puntero_1.value.id) 

        var puntero_2 = almacen.openCursor(rango)

        puntero_2.addEventListener("success", (event) => {
          var puntero_3 = event.target.result
          if(puntero_3){
            var value = {
              id : puntero_3.value.id,
              url: puntero_3.value.url,
              desc: puntero_3.value.desc,
              index: puntero_1.value.index,
            }
            aux.preview.push(value)
            setPreview([...aux.preview])
          }
        })
        puntero_1.continue()
      } else {
        setPreview([...aux.preview])
      }
    }

    function MostrarPreview(){
        aux.preview = []
        var transaccion = database.db.transaction(["Preview"])
        var almacen = transaccion.objectStore("Preview")

        var puntero = almacen.openCursor()
        puntero.addEventListener("success", MostrarImagenesPreview)
    }

    function addImagetoPreview(id){
        var transaccion = database.db.transaction(["Gallery"])
        var almacen = transaccion.objectStore("Gallery")

        var rango = IDBKeyRange.only(id)
        var puntero = almacen.openCursor(rango)
      
        puntero.addEventListener("success", (event) => {
          var puntero = event.target.result
            if(puntero){
              var value = {
                index: preview.length + 1,
                id: puntero.value.id
              }

              var transaccion = database.db.transaction(["Preview"],"readwrite")
              var almacen = transaccion.objectStore("Preview")
              almacen.add(value)
              MostrarPreview()
            }
        })
        
    }

    function removeImagetoPreview(index){
      var transaccion = database.db.transaction(["Preview"],"readwrite")
        var almacen = transaccion.objectStore("Preview")
        
        var solicitud = almacen.delete(index)
        MostrarPreview()
    }


  if(!database.db) {
    IniciarDB()
    setTimeout(MostrarGallery, 1000)
    setTimeout(MostrarPreview, 1000)
  }

  const GalleryFunctions = {
    Mostrar : MostrarGallery,
    Almacenar : AlmacenarImagen,
    Eliminar: EliminarImagen,
    Subir: addImagetoPreview,
  }

  const DisplayFunctions = {
    Mostrar : MostrarPreview,
    Eliminar : removeImagetoPreview,
  }

  return (
    <div className="frame-canvas">
        <Display preview={preview} functions={DisplayFunctions}/>
        <hr />
        <Gallery gallery={gallery} functions={GalleryFunctions}/>
    </div>
  )
}
