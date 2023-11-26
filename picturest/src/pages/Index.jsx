import React from 'react'
import { Link } from 'react-router-dom'

import Login from '../components/general/Login'

export default function Index() {
  return (
    <div>
      <section>
        <h1> Portaretratos Holografico configurable <br /> <small> Todavia en beta-testing </small></h1>
        <p> Una propuesta innovadora para hacer portaretratos programables : mayor experiencia y mas fluidez </p>
        <video  width="80%" controls>
            <source src="/demo.mp4" type="video/mp4" />
        </video>
      </section>
      
      <section>
        <figure>
            
            <figcaption> Empiece a usar su dispositivo ya !!! </figcaption>
        </figure>
        <div>
            <Login msg={"Ir a Retratos"}/>
        </div>
      </section>
    </div>
  )
}
