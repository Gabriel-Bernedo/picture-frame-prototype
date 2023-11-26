import React from 'react'
import {toast} from 'react-hot-toast'
export default function PreviewDisplay({data}) {
  return (
      <figure className="retrato">
        <img src={data.url} alt="img Corrompida"/>
        <figcaption>{data.desc}</figcaption>
      </figure>
  )
}
