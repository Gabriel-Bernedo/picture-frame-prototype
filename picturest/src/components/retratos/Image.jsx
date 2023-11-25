import React from 'react'
import './Image.css'
import {v4} from 'uuid'

export default function Image({data, del, add, children}) {

  return (
    <div style={{backgroundImage: "url(" + data.url + ")"}} className="image">
        {(del) ? 
          <button className="close-button" type="button" onClick={del}>X</button>
        :
          ""
        }
        {(add) ?
          <button className="add-button" type="button" onClick={add}>+</button>
        :
          ""}
        
    </div>
  )
}
