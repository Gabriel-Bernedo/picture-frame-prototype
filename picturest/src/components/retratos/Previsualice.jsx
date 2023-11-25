import React, {useState} from 'react'

import PreviewOptions from './Previsualice/PreviewOptions'
import PreviewDisplay from './Previsualice/PreviewDisplay'
export default function Previsualice({data}) {
  
  const [index, setIndex] = useState(0)
  
  return (
    <div style={{
      border: "2px solid white",
      padding: "1rem"
    }}>
      <PreviewOptions />
      <PreviewDisplay data={{
        url: "/imgTest.jpg",
        desc: "Descripcion completamente normal XD"
      }}/>
    </div>
  )
}
