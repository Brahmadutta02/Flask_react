import React from 'react'

const speakers = {
  id: 1,
  name: "Brahma",
  jobTitle: "Web Developer",
  company: "Freelancemate",
  address: {
    street: "Niliabag",
    city: "Balasore",
    state: "Odisha",
    country: "INDIA",
  }
};

function App(){
 const {name, jobTitle, company, address} = speakers; //destructuring of object properties
 const {street, city, state, country} = address;
 const speakerName = "Brahma";
  return (
      <div>
      <h1>Welcome to the REACT PAGE, {speakerName}</h1>
      <h2>Name: {name}</h2>
      <h4>Position: {jobTitle}</h4>
      <h4>Company: {company}</h4>
      <h4>Street: {street}</h4>
      <h4>City: {city}</h4>
      <h4>State: {state}</h4>
      <h4>Country: {country}</h4>
    </div>
  );
}
export default App

