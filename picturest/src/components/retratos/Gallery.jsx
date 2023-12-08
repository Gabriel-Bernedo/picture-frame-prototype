import React, {useState, useRef, useEffect} from 'react'
import { toast } from 'react-hot-toast'

import GalleryDisplay from './gallery/GalleryDisplay'
import AddImages from './gallery/AddImages'
import UpdateImage from './gallery/UpdateImage'

export default function Gallery({functions, gallery}) {

  const EditionPanel = {
    panel: undefined,
    available: true,
  }
  function updateData(object){
    if(EditionPanel.available){
      EditionPanel.available = false
      if(EditionPanel.panel){
        toast.dismiss(EditionPanel.panel.id)
      }
      toast((t) => {
        EditionPanel.panel = t
        EditionPanel.available = true
        return (
          <UpdateImage data={object} 
            save={functions.Actualizar} 
            add={functions.Subir}
            del={functions.Eliminar}
            close={() => toast.dismiss(t.id)}/>
        )
      }, {duration: Infinity})
    }
    
  }

  return (
    <div className="action-button-container">
      <h1>GALERÍA</h1>
      <GalleryDisplay data={gallery} edit={updateData}/>
      <AddImages add={functions.Almacenar} show={functions.Mostrar} />
    </ div>
  )
}
