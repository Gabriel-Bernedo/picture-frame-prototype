import React from 'react'

import { toast } from 'react-hot-toast'

import Display from '../components/retratos/Display'
import Gallery from '../components/retratos/Gallery' 

const database = {
  db: undefined
} 

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
    database.db = event.target.result
}

function CrearAlmacen(event){
    var database = event.target.result
    var almacen = database.createObjectStore("Gallery", {keyPath: "id"})
}

export default function Retratos() {
  if(!database.db) {
    IniciarDB()
  }

  return (
    <div>
        <Display database={database}/>
        <Gallery database={database}/>
    </div>
  )
}
