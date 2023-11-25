import React from 'react'
import Image from './Image'
export default function GalleryDisplay({data, del}) {
  return (
    <div>
      {data.map((el) => {
        return (
            <Image key={el.id} data={el} del={del}/>
        )
      })}
    </div>
  )
}
