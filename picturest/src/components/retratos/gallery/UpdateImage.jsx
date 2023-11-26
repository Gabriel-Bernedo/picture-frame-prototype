import React, {useRef} from 'react'
import {toast} from 'react-hot-toast'

export default function UpdateImage({data, save, close}) {

    const description = useRef(0)
    const name = useRef(0)

    function UpdateImage(){
        save({
            id: data.id,
            url: data.url,
            name: name.current.value,
            desc: description.current.value,
        })
        toast.success("Data Actualizada", {
            position: "top-right",
            duration: 2000
        })
    }

  return (
    <div>
        <div
            style={{backgroundColor: "rgb(256,256,256)"}}>
            <label htmlFor="name">Nombre :</label>
            <input ref={name} type="text" id="name" value={data.name}/>
        </div>
        <div
            style={{backgroundColor: "rgb(256,256,256)"}}>
            <label htmlFor="description">Descripcion :</label>
            <textarea ref={description} rows={5} id="description" value={data.desc}/>
        </div>
        <button className="action-button" onClick={UpdateImage}
            style={{right:0}}>
            <i class="bi bi-floppy-fill"></i>
        </button>
        <button className="action-button" onClick={close}
            style={{left:0}}>
            <i class="bi bi-x-lg"></i>
        </button>
    </div>
  )
}
