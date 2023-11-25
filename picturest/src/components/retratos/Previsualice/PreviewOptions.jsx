import React, {useState} from 'react'
import "./PreviewOptions.css"

import temp from '../../../assets/temp.png'
import pausa from '../../../assets/pausa.png'
import anterior from '../../../assets/anterior.png'
import sig from '../../../assets/sig.png'
import play from '../../../assets/play.png'

export default function PreviewOptions({max, index, set}) {
  const [auto, setAuto] = useState(true)
  const [time, setTime] = useState(5000)
  function previous(){
    if(0 >= index){
      set(max - 1)
    } else {
      set(index - 1)
    }
  }

  function next(){
    if(index >= max - 1){
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
        <img src={temp} class="icon" />
        <img src={anterior} type="button" onClick={previous}  class="icon" /> 
        <img src={sig} type="button" onClick={next}  class="icon" />
        <img src={pausa} type="button" onClick={auto}  class="icon" />
        <hr />
    </nav>
  )
}
