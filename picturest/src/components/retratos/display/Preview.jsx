import React, {useState, useEffect} from 'react'

import PreviewDisplay from './Preview/PreviewDisplay'
import PreviewOptions from './Preview/PreviewOptions'
import {toast} from 'react-hot-toast'

import './Preview.css'
export default function Preview({dataset, select, del}) {
    const [index, setIndex] = useState(0)

    const [auto, setAuto] = useState(false)
    const [time, setTime] = useState(5000)
    const [initial, setInitial] = useState(Date.now())
    const [diff, setDiff] = useState(Date.now() - initial)
    const [data, setData] = useState(undefined)
    function previous(){
        if(0 >= index){
        setIndex(dataset.length - 1)
        } else {
        setIndex(index - 1)
        }
    }

    function next(){
        if(index >= dataset.length - 1){
        setIndex(0)
        } else {
        setIndex(index + 1)
        }
    }

    function skip(){
        setAuto(!auto)
    }

    function tick(){
        return new Promise(resolve => setTimeout(() => setDiff(Date.now() - initial), time));
    }

    useEffect(() => {
        var result = dataset[index]
        if(result)
            setData(select(dataset[index].id))
    }, [index])

    useEffect(() => {
        if(auto){
            setInitial(Date.now())
        }
        
    }, [auto])

    useEffect(() => {
        if(auto){
            tick()
        }
    }, [initial])

    useEffect(() => {
        if(auto){
            if(diff >= time){
                next()
                setInitial(Date.now())
            } else {
                tick()
            }
        }
        
    },[diff])

  return (data) ? (
    <div className="preview-canvas">
        <PreviewOptions 
            prev={previous} 
            next={next} 
            skip={skip} 
            auto={auto} 
            del={() => {
                setAuto(false)
                del()}
            }/>
        <PreviewDisplay data={data}/>
    </div> 
  )
  :
  (
    <div className="preview-canvas">
        Faltan imagenes en proyeccion
    </div>
  )
}
