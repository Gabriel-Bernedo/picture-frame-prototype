import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <nav>

      <Link to="/"><h1 id="navt1">CONFIGURACIÓN</h1></Link>
      <Link to="/retratos"><h1 id="navt1">ARCHIVOS</h1></Link>
      <Link to="/"><h1 id="titulo">PICTURES</h1></Link>
      <Link to="/"><h1 id="navt2">EDICIÓN</h1></Link>
      <Link to="/"><h1 id="navt2">MOD HOLOGRÁFICO</h1></Link>
    </nav>
  )
}
