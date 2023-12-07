import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <header className="header">
      {(screen.width >= 900) ? 
        <nav>
          <Link to="/" className="additional-button"><h1 id="navt1">CONFIGURACIÓN</h1></Link>
          <Link to="/" className="center"><h1 id="titulo">PICTURES</h1></Link>
          <Link to="/" className="additional-button"><h1 id="navt2">MOD HOLOGRÁFICO</h1></Link>
        </nav>
       :
        <nav>
          <Link to="/" className="center"><h1 id="titulo">PICTURES</h1></Link>
        </nav>
      }
    </header>
  )
}
