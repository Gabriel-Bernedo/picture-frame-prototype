import React, {useState, useEffect} from 'react'

import DisplayDataset from './display/DisplayDataset'
import Previsualice from './display/Previsualice'

export default function Display({preview, functions}) {

  return (
    <div className="action-button-container">
      <h1>PROYECCION</h1>
      <DisplayDataset data={preview}/>
      <Previsualice data={preview}/>
    </div>
  )
}
