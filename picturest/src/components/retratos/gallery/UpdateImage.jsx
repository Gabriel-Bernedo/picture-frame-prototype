import React, {useRef} from 'react'
import {toast} from 'react-hot-toast'

export default function UpdateImage({data, save, close, del, add}) {

    const description = useRef(0)
    const name = useRef(0)
    const place = useRef(0)
    const date = useRef(0)
    const people = useRef(0)

    function UpdateImage(){
        save({
            id: data.id,
            url: data.url,
            name: name.current.value,
            desc: description.current.value,
            place: place.current.value,
            people: people.current.value,
            date: date.current.value,
            created: data.created
        })
        toast.success("Data Actualizada", {
            position: "top-right",
            duration: 1000
        })
        close()
    }

    function disableForm(event){
        event.preventDefault()
    }

  return (
    <form onSubmit={disableForm} className="update-canvas">
        <div
            style={{backgroundColor: "rgb(256,256,256)"}}>
            <label htmlFor="name">Nombre :</label>
            <input ref={name} type="text" id="name" defaultValue={data.name}/>
        </div>
        <div
            style={{backgroundColor: "rgb(256,256,256)"}}>
            <label htmlFor="description">Descripcion :</label>
            <textarea ref={description} id="description" defaultValue={data.desc}></textarea>
        </div>
        <div
            style={{backgroundColor: "rgb(256,256,256)"}}>
            <label htmlFor="place">Lugar :</label>
            <input ref={place} id="place" type="text" defaultValue={data.place}></input>
        </div>
        <div
            style={{backgroundColor: "rgb(256,256,256)"}}>
            <label htmlFor="people">Personas :</label>
            <input ref={people} id="people" type="text" defaultValue={data.people}></input>
        </div>
        <div
            style={{backgroundColor: "rgb(256,256,256)"}}>
            <label htmlFor="date">Fecha :</label>
            <input ref={date} id="date" type="date" defaultValue={data.date}></input>
        </div>
        <button className="action-button" onClick={UpdateImage}
            style={{right:0, top:"95%"}}>
            <i class="bi bi-floppy-fill"></i>
        </button>
        <button className="action-button" onClick={close}
            style={{left:0, top:"95%"}}>
            <i class="bi bi-x-lg"></i>
        </button>
        <button className="action-button" type="button" onClick={() => {
            del(data.id)
            close()
        }}
            style={{left:"3.5rem", top:"95%"}}>
            <i class="bi bi-trash-fill"></i>
        </button>
        <button className="action-button" type="button" onClick={() => {
            UpdateImage()
            add(data)
        }}
            style={{right:"3.5rem", top:"95%"}}>
            <i class="bi bi-image"></i>
        </button>
    </form>
  )
}
