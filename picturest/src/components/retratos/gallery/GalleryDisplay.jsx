import React from 'react'
import Image from './Image'
export default function GalleryDisplay({data, del, add, edit}) {
  return (
    <div>
      {data.map((el) => {
        return (
            <Image key={el.id} data={el}>
              <button className="hover-button" type="button" onClick={() => del(el.id)}
                style={{top:"5%", right:"5%"}}>
                <i class="bi bi-x-circle"></i>
              </button>
              <button className="hover-button" type="button" onClick={() => add(el.id)}
                style={{bottom:"5%", right:"5%"}}>
                <i class="bi bi-arrow-up-circle"></i>
              </button>
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
