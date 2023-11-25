import React, {useState, useRef, useEffect} from 'react'
import { toast } from 'react-hot-toast'

import GalleryDisplay from './GalleryDisplay'
import AddImages from './AddImages'

export default function Gallery({database}) {

    const [gallery, setGallery] = useState([])
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
        var transaccion = database.db.transaction(["Gallery"])
        var almacen = transaccion.objectStore("Gallery")

        var puntero = almacen.openCursor()
        puntero.addEventListener("success", MostrarImagenes)
    }

    function AlmacenarImagen(object){
        // data
        var transaccion = database.db.transaction(["Gallery"],"readwrite")
        var almacen = transaccion.objectStore("Gallery")
        almacen.add(object)
    } 

    function EliminarImagen(id){
        var transaccion = database.db.transaction(["Gallery"],"readwrite")
        var almacen = transaccion.objectStore("Gallery")
        
        var solicitud = almacen.delete(id)
        Mostrar()
    }

    if(!database.db) {
        setTimeout(Mostrar,1000)
    }

  return (
    <div>
      <GalleryDisplay data={gallery} del={EliminarImagen}/>
      <AddImages add={AlmacenarImagen} show={Mostrar} />
    </ div>
  )
}
