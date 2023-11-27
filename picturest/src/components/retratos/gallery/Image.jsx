import React from 'react'
import './Image.css'
import {v4} from 'uuid'

export default function Image({data, del, add, children}) {

  return (data) ? (
    <div className="image-container" title={data.name}>
      <div style={{backgroundImage: "url(" + data.url + ")"}} className="small image">
        {children}  
      </div>
    </div>
  ) :
  (
    <div></div>
  )
}
