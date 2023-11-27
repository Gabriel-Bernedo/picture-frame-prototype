import React from 'react'
import Image from '../gallery/Image'

export default function DisplayDataset({data, del, select}) {
  return (
    <div>
      {data.map((el) => {
        return (
          <Image key={el.id} data={select(el.id)}>
            <button className="hover-button" type="button" onClick={() => del(el.id)}
                style={{top:"5%", right:"5%"}}>
              <i class="bi bi-x-circle"></i>
            </button>
          </Image>
        )
      })}
    </div>
  )
}
