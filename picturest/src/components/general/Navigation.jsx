import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <nav>
      <Link to="/retratos"><h1 id="navt">ARCHIVOS</h1></Link>
      <Link to="/"><h1 id="navt">EDICIÓN</h1></Link>
      <Link to="/"><h1 id="titulo">PICTURES</h1></Link>
      <Link to="/"><h1 id="navt">CONFIGURACIÓN</h1></Link>
      <Link to="/"><h1 id="navt">MOD HOLOGRÁFICO</h1></Link>
    </nav>
  )
}
