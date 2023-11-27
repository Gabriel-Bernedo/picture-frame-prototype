import React from 'react'
import {toast} from 'react-hot-toast'
export default function PreviewDisplay({data}) {
  return (
      <div>
        <div className="preview-image-canvas" >
          <div className="preview-image" title={data.name} 
            style={{backgroundImage : `url(${data.url})`}}>
          </div>
        </div>
        {(data.desc) ?
          <div className="image-information">
            {data.desc}
          </div>
          : undefined
        }
        {(data.date) ?
          <div className="image-information">
            Fecha: {data.date}
          </div>
        : undefined
        }
        {(data.place)?
          <div className="image-information">
            Lugar: {data.place}
          </div>
        : undefined
        }
        {(data.peole)?
          <div className="image-information">
            Personas: {data.people}
          </div>
        : undefined
        }
      </div>
  )
}
