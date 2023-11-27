import React from 'react'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'

import Login from '../components/general/Login'

export default function Index() {

  function greet(){
    toast("Le damos la Bienvenida a su galería",{icon:"👋"})
  }

  return (
    <div id="root2">
      <section id="cuerpoIndex">
        <h1 id="titulo"> Portaretratos Holografico configurable <br /> <small> Versión beta </small></h1>
        <p id="text"> Una propuesta innovadora para hacer portaretratos programables : mayor experiencia y mas fluidez </p>
        <video id="videoDemo" width="80%" controls>
          <source src="/demo.mp4" type="video/mp4"/>
        </video>
      </section>
      <section>
        <div id="butoonPrin">
          <Link to="/retratos">
            <button type="button" onClick={greet}>Retratos</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
