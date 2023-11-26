import React, {useState, useRef, useEffect} from 'react'
import { toast } from 'react-hot-toast'

import GalleryDisplay from './gallery/GalleryDisplay'
import AddImages from './gallery/AddImages'
import UpdateImage from './gallery/UpdateImage'

export default function Gallery({functions, gallery}) {

  function updateData(object){
    toast((t) => (
      <UpdateImage data={object} save={functions.Actualizar}
        close={() => toast.dismiss(t.id)}/>
    ), {duration: 10000})
  }

  return (
    <div className="action-button-container">
      <h1>GALERÍA</h1>
      <GalleryDisplay data={gallery} del={functions.Eliminar} add={functions.Subir} edit={updateData}/>
      <AddImages add={functions.Almacenar} show={functions.Mostrar} />
    </ div>
  )
}
