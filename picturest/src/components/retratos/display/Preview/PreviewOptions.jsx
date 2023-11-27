import React, {useState} from 'react'

export default function PreviewOptions({next, prev, skip, auto, del}) {

  return (
    <nav className="botones">
      <button type="button" className="icon">
        <i class="bi bi-clock-history"></i>
      </button>
      <button type="button" onClick={prev} className="icon">
        <i class="bi bi-caret-left-fill"></i> 
      </button>
      <button type="button" onClick={next} className="icon">
        <i class="bi bi-caret-right-fill"></i>
      </button>
      <button type="button" onClick={skip} className="icon">
        <i class={(auto)?"bi bi-pause-circle" : "bi bi-play-circle" }></i>
      </button>
      <button type="button" onClick={del} className="icon">
        <i class="bi bi-x-circle"></i>
      </button>
    </nav>
  )
}
