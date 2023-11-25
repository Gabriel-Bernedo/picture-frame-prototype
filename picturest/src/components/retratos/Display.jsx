import React, {useState, useEffect} from 'react'

import DisplayDataset from './DisplayDataset'
import Previsualice from './Previsualice'

export default function Display({database}) {

  const [gallery, setGallery] = useState([])
  
  /*
  function addImage(id){
    var transaccion = database.db.transaction(["Gallery"])
    var almacen = transaccion.objectStorage("Gallery")

    var index = almacen.index("Key")
    var rango = IDBKeyRange
    var puntero = 
  }
  */

  return (
    <div>
      <DisplayDataset/>
      <Previsualice />
    </div>
  )
}
