import React from 'react'
import Image from './Image'
export default function GalleryDisplay({data, del, add}) {
  return (
    <div>
      {data.map((el) => {
        return (
            <Image key={el.id} data={el} 
              del={() => del(el.id)} 
              add={() => add(el.id)}
            />
        )
      })}
    </div>
  )
}
