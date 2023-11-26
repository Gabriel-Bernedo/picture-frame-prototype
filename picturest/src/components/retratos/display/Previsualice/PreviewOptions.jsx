import React, {useState} from 'react'
import "./PreviewOptions.css"

import temp from '/src/assets/temp.png'
import pausa from '/src/assets/pausa.png'
import anterior from '/src/assets/anterior.png'
import sig from '/src/assets/sig.png'
import play from '/src/assets/play.png'

export default function PreviewOptions({functions, index, set}) {
  const [auto, setAuto] = useState(true)
  const [time, setTime] = useState(5000)
  function previous(){
    if(0 >= index){
      set(dataset.length - 1)
    } else {
      set(index - 1)
    }
  }

  function next(){
    if(index >= dataset.length - 1){
      set(0)
    } else {
      set(index + 1)
    }
  }

  var t = setInterval(next, time)

  function skip(){
    if(auto){
      clearInterval(t)
    } else {
      t =  setIntervale(next,time)
    }
  }

  return (
    <nav className="botones">
      <button type="button" className="icon">
        <img src={temp}/>
      </button>
      <button type="button" onClick={previous} className="icon">
        <img src={anterior} /> 
      </button>
      <button type="button" onClick={next} className="icon">
        <img src={sig}/>
      </button>
      <button type="button" onClick={auto} className="icon">
        <img src={pausa}/>
      </button>
        <hr />
    </nav>
  )
}
