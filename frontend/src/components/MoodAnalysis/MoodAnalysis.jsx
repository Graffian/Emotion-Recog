import React from 'react'
import "./MoodAnalysis.css"
function MoodAnalysis({mood}) {
  return (
    <div className='main1Div'>
      <h2>{mood}</h2>
    </div>
  )
}

export default MoodAnalysis