import React from 'react'

export default function PreviewDisplay({data}) {
  return (
    <div>
      <figure>
        <img src={data.url} alt="img Corrompida"/>
        <figcaption>{data.desc}</figcaption>
      </figure>
    </div>
  )
}
