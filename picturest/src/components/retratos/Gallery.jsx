import React, {useState, useRef, useEffect} from 'react'
import { toast } from 'react-hot-toast'

import GalleryDisplay from './GalleryDisplay'
import AddImages from './AddImages'

export default function Gallery({functions, gallery}) {

  return (
    <div>
      <GalleryDisplay data={gallery} del={functions.Eliminar} add={functions.Subir}/>
      <AddImages add={functions.Almacenar} show={functions.Mostrar} />
    </ div>
  )
}
