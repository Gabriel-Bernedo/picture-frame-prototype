import React, {useRef, useState} from 'react'
import { toast } from 'react-hot-toast'
import {v4} from "uuid"
import Image from './Image'

export default function AddImages( {add, show, addPreview}) 
{
    const img = useRef(0)
    const [imgUrl, setImgUrl] = useState([])

    function saveImgs(){
        imgUrl.forEach(add)

        toast.success("Se guardaron todas las imagenes")
        show()
        setImgUrl([])
    }

    async function createThumbnails(files){
        const res = []
        for(var i=0; i< files.length; i++){
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                res.push({
                    "id": v4(),
                    "url": reader.result
                })
                setImgUrl([...imgUrl,...res])
                toast.success("Image was upload Successfully")
            })
            reader.readAsDataURL(files[i])
        }
    }

    function previsualize(){
        createThumbnails(img.current.files)
    }

    function deleteImage(id){
        setImgUrl([...imgUrl.filter( (e) => e.id != id)])
    }

    return (
        <form>
            <div>
                <label htmlFor="img">Imagen:</label>
                <input ref={img} multiple={true} type="file" name="" id="img" onChange={previsualize}/>
                <div>
                    {imgUrl.map((el)=>{
                        return (
                            <Image key={el.id} data={el} del={() => deleteImage(el.id)}/>
                        )
                    })}
                </div>
            </div>
            <button type="button" onClick={saveImgs}>Guardar</button>
        </form>
    )
}
