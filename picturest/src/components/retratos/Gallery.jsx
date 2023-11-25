import React, {useState, useRef, useEffect} from 'react'
import { toast } from 'react-hot-toast'

var db 

function IniciarDB(){
    var gallery = indexedDB.open("gallery",1)
    gallery.addEventListener("error", MostrarError)
    gallery.addEventListener("success", Comenzar)
    gallery.addEventListener("upgradeneeded", CrearAlmacen)
}

function MostrarError(event){
    toast.error(`ERROR : ${event.code} / ${event.message}`)
}

function Comenzar(event){
    toast.success("Galería correctamente cargada")
    db = event.target.result
}

function CrearAlmacen(event){
    var database = event.target.result
    var almacen = database.createObjectStore("Gallery", {keyPath: "id"})
}

import GalleryDisplay from './GalleryDisplay'
import AddImages from './AddImages'

export default function Gallery() {
    
    

    const [gallery, setGallery] = useState([])
    const submit = useRef(0) 
    const aux = {
        data : []
    }
  
    function MostrarImagenes(event){
        var puntero = event.target.result
        if(puntero){
            aux.data.push(puntero.value)
            puntero.continue()
        } else {
            setGallery([...aux.data])
        }
    }

    function Mostrar(){
        aux.data = []
        var transaccion = db.transaction(["Gallery"])
        var almacen = transaccion.objectStore("Gallery")

        var puntero = almacen.openCursor()
        puntero.addEventListener("success", MostrarImagenes)
    }

    function AlmacenarImagen(object){
        // data
        var transaccion = db.transaction(["Gallery"],"readwrite")
        var almacen = transaccion.objectStore("Gallery")
        almacen.add(object)
    } 

    function EliminarImagen(id){
        var transaccion = db.transaction(["Gallery"],"readwrite")
        var almacen = transaccion.objectStore("Gallery")
        
        var solicitud = almacen.delete(id)
        Mostrar()
    }

    if(!db) {
        IniciarDB()
        setTimeout(Mostrar,1000)
    }

  return (
    <div>
      <GalleryDisplay data={gallery} del={EliminarImagen}/>
      <AddImages add={AlmacenarImagen} show={Mostrar} />
    </ div>
  )
}
