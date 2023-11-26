import React from 'react'
import { Link } from 'react-router-dom'

import Login from '../components/general/Login'

export default function Index() {
  return (
    <div>
      <section id="cuerpoIndex">
        <h1 id="titulo"> Portaretratos Holografico configurable <br /> <small> Versión beta </small></h1>
        <p id="text"> Una propuesta innovadora para hacer portaretratos programables : mayor experiencia y mas fluidez </p>
        <video id="videoDemo" width="80%" controls>
          <source src="/demo.mp4" type="video/mp4" />
        </video>
      </section>
      <section>
        <div>
          <Login msg={"RETRATOS"}/>
        </div>
      </section>
    </div>
  )
}
