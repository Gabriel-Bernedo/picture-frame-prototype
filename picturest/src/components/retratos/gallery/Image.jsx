import React from 'react'
import './Image.css'
import {v4} from 'uuid'

export default function Image({data, del, add, children}) {

  return (
    <div className="image-container">
      <div style={{backgroundImage: "url(" + data.url + ")"}} className="image">
        {children}  
      </div>
    </div>
  )
}
