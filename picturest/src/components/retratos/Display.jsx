import React, {useState, useEffect} from 'react'

import DisplayDataset from './DisplayDataset'
import Previsualice from './Previsualice'

export default function Display({preview, functions}) {

  return (
    <div>
      <DisplayDataset data={preview}/>
      <Previsualice data={preview}/>
    </div>
  )
}
