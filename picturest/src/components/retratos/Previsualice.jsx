import React, {useState} from 'react'

import {toast} from 'react-hot-toast'
import PreviewOptions from './Previsualice/PreviewOptions'
import PreviewDisplay from './Previsualice/PreviewDisplay'

import './Previsualice.css'

export default function Previsualice({data}) {
  
  const [index, setIndex] = useState(0)
  
  const preview = (
  <div className="preview-canvas">
    <PreviewOptions max={data.length} index={index} set={setIndex} />
    <PreviewDisplay data={data[index]}/>
  </div>
  )

  function showPreview(){
    toast((t) => 
      preview ,
      {duration: 10000}
    )
  }
  
  return (
    <div>
      <button type="button" onClick={showPreview}>Vista Previa</button>
    </div>
  )
}
