
import React from 'react'
function SpeakerProfile(props){

  return(
    <>
    <h3>{props.name}</h3>
    <p>Position: {props.jobTitle}</p>
    <p>Company: {props.company}</p>
    </>
  )
}

function App(){
  return(
    <>
    <h1>Speaker Profile</h1>
    <SpeakerProfile name="John Doe" jobTitle="Software Engineer" company="Google" /> 

    <h2></h2>
    </>
  )
}

export default App;