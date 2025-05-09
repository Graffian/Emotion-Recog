import MoodCamera from './MoodCamera/MoodCamera'
import MoodAnalysis from './MoodAnalysis/MoodAnalysis'
import './MoodMate.css'
import { Route , Routes } from 'react-router-dom'
import { useState } from 'react'
function MoodMate() {
  const [mood , setMood] = useState(null)
  return (
    <>
      <header className='header'>
        <h1 style={{"color" : "white"}}>MoodMate – Your Emotional Check-In Companion</h1>
        <p style={{"color" : "white"}}>Detect moods in real-time and support mental wellness through early emotional insights and personalized affirmations.</p>
      </header>
      <div className='MoodAnalytics'>
        <MoodCamera setMood={setMood}/>
        <MoodAnalysis mood={mood}/>
      </div>
    </>
  )
}

export default MoodMate