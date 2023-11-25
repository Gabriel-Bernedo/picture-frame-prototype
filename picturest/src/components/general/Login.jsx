import React from 'react'
import {toast} from 'react-hot-toast'
const form = (
  <div>
    
  </div>
)
export default function Login({msg}) {



  function logIn(){
    toast("something XDDD")
  }



  return (
    <button type="button" onClick={logIn}>
      {msg}
    </button>
  )
}
