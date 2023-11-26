import React, {useState, useRef, useEffect} from 'react'
import { toast } from 'react-hot-toast'

import GalleryDisplay from './gallery/GalleryDisplay'
import AddImages from './gallery/AddImages'

export default function Gallery({functions, gallery}) {

  return (
    <div className="action-button-container">
      <h1>GALERÍA</h1>
      <GalleryDisplay data={gallery} del={functions.Eliminar} add={functions.Subir}/>
      <AddImages add={functions.Almacenar} show={functions.Mostrar} />
    </ div>
  )
}
