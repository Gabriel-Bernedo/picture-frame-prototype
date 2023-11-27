import React, {useState} from 'react'

import {toast} from 'react-hot-toast'

import Preview from './Preview'

export default function Previsualice({data, select}) {

  function showPreview(){
    toast((t) => 
      (
        <Preview dataset={data} select={select} del={() => {toast.dismiss(t.id)}}>

        </Preview>
      ) ,
      {duration: Infinity}
    )
  }
  
  return (
      <button type="button" className="action-button" onClick={showPreview}
        style={{position:"absolute", top:"3%", right:"3%"}}>
        <h2 className="bi bi-eye"></h2>
      </button>
  )
}
