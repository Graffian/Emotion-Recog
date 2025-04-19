import React from 'react'
import "./MoodCamera.css"
import Webcam from "react-webcam"
import { useCallback , useState , useRef } from 'react'
import { data, useNavigate } from 'react-router-dom'

function MoodCamera({setMood}) {
    const WebCamRef = useRef(null)
    const [imgSrc,setImgSrc] = useState(null)
    const navigate = useNavigate()
    const handleAnalyse = async ()=>{
        const info = {
            uri : imgSrc
        }
        const data = await fetch("http://127.0.0.1:8000/" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(info)
        })
        const response = await data.json()
        console.log(response)
        setMood(response.mood)
    }
    const handleRetakeButton = async ()=>{
        setImgSrc(null)
        const data = await fetch("http://127.0.0.1:8000/api/retake" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                msg : "delete all data"
            })
        })
        const response = await data.json()
        if (response.msg == "Success"){
            navigate("/app")
            console.log(response)
        }

    }
    const capture = useCallback(()=>{
        const imageSrc = WebCamRef.current.getScreenshot()
        setImgSrc(imageSrc)
    } , [imgSrc])
  return (
    <div className='main0Div'>
        {imgSrc ? (<img src={imgSrc} alt='webcam'/>) : (<Webcam height={400} width={400} ref={WebCamRef}/>)}
        <span className='captureButtons'>
            {imgSrc ? (<button className='analyseBtn' onClick={handleAnalyse}>Analyse Mood</button>):(<button className='captureBtn' onClick={capture}>Capture Mood</button>)}
            <button className='retakeBtn' onClick={handleRetakeButton}>Retake</button>
        </span>
        
    </div>
  )
}

export default MoodCamera