import React, {useState, useEffect} from 'react'

import DisplayDataset from './DisplayDataset'
import Previsualice from './Previsualice'

export default function Display({database}) {

  const [gallery, setGallery] = useState([])
  const aux = {
    data: []
  }
  
  function addImage(id){
    var transaccion = database.db.transaction(["Gallery"])
    var almacen = transaccion.objectStorage("Gallery")

    var rango = IDBKeyRange(index)
    var puntero = almacen.openCursor(rango)
    puntero.addEventListener("success", () => {
      
    })

  }
  

  return (
    <div>
      <DisplayDataset/>
      <Previsualice />
    </div>
  )
}
