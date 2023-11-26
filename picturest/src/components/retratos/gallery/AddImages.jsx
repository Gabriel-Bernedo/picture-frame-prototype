import React, {useRef, useState} from 'react'
import { toast } from 'react-hot-toast'
import {v4} from "uuid"
import Image from './Image'

import './AddImages.css'
export default function AddImages( {add, show, addPreview}) 
{
    const img = useRef(0)
    var res = []

    function saveImgs(){
        res.forEach(add)
        toast.success("Se subieron todas las imagenes")
        show()
    }

    async function createThumbnails(files){
        res = []
        for(var i=0; i< files.length; i++){
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                res.push({
                    "id": v4(),
                    "url": reader.result,
                    "desc" : undefined
                })
            })
            reader.readAsDataURL(files[i])
        }
        setTimeout(saveImgs,1000)
    }

    function previsualize(){
        createThumbnails(img.current.files)
    }

    function loadImg(){
        img.current.click()
    }

    return (
        <>
            <input ref={img} multiple={true} type="file" id="img" onChange={previsualize}
                style={{display: "none"}}/>
            <button className="action-button" type="button" onClick={loadImg}
                style={{display:"inline", bottom:"5%", right:"5%"}}>
                <h2 class="bi bi-patch-plus-fill"></h2>
            </button>
        </>
    )
}
