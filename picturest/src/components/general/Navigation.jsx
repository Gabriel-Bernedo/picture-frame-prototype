import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <nav>
      <Link to="/"><h1>Pincturest</h1></Link>
      <Link to="retratos/">Retratos</Link>    
    </nav>
  )
}
