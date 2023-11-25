import React from 'react'
import "./PreviewOptions.css"
export default function PreviewOptions() {
  return (
    <nav>
        <button className="icon"><img src="/timer.jpg" alt="" /></button>
        <button className="icon"><img src="/previous.jpg" alt="" /></button>
        <button className="icon"><img src="/pause.jpg" alt="" /></button>
        <button className="icon"><img src="/next.jpg" alt="" /></button>
        <button className="icon"><img src="/info.jpg" alt="" /></button>
        <hr />
    </nav>
  )
}
