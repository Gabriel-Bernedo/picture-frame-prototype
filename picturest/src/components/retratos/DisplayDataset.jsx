import React from 'react'
import Image from './Image'
export default function DisplayDataset({data, del}) {
  return (
    <div>
      {data.map((el) => {
        return (
          <Image key={el.index} data={el} del={del}/>
        )
      })}
    </div>
  )
}
