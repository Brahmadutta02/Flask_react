import react,{useEffect, useState} from 'react';
import './App.css';

function App(){
  const [data, setData] = useState({})
  useEffect(() =>{
    fetchData()
  },[])

  const fetchData = async()=>{
    try{
      const response = await fetch('http://localhost:5000/data');
      const jsonData = await response.json();
      setData(jsonData)
    }catch(error){
      console.log('Error', error)
    }
  }
  return(
    <div className='App'>
      <h1>This is my first page</h1>
      <h3>{data.message}</h3>
    </div>
  )
}

export default App;