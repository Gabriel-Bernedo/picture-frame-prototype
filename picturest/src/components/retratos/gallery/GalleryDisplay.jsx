import React from 'react'
import Image from './Image'
export default function GalleryDisplay({data, edit}) {

  return (
    <div>
      {data.map((el) => {
        return (
            <Image key={el.id} data={el}>
              <button className="hover-button" type="button" onClick={() => edit(el)}
                style={{bottom:"5%", left:"5%", display:"inline"}}>
                <i class="bi bi-pencil-fill"></i>
              </button>
            </Image>
        )
      })}
    </div>
  )
}
