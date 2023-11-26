import React, {useState, useEffect} from 'react'

import DisplayDataset from './display/DisplayDataset'
import Previsualice from './display/Previsualice'

export default function Display({preview, functions}) {

  return (
    <div>
      <DisplayDataset data={preview}/>
      <Previsualice data={preview}/>
    </div>
  )
}
