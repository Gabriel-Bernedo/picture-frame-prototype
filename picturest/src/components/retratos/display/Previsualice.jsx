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
      <button type="button" className="action-button" onClick={showPreview}
        style={{position:"absolute", top:"3%", right:"3%"}}>
        <h2 class="bi bi-eye"></h2>
      </button>
  )
}
