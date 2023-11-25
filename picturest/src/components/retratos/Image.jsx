import React from 'react'
import './Image.css'
import {v4} from 'uuid'

export default function Image({data, del}) {
    function deleteImage(){
        del(data.id)
    }

  return (
    <div style={{backgroundImage: "url(" + data.url + ")"}} className="image">
        <button className="close-button" type="button" onClick={deleteImage}>X</button>
    </div>
  )
}
