import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card.js';

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`






function App() {
const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto(){
      axios.get(URL)
      .then(res=>{
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err =>{
        console.log(err.message)
      })
    }
    //fetchPhoto()
  }, []);
  
  return (
   <section>
   <Card
    title={apod.title}
    text={apod.description}
    imageUrl={apod.url}
    date= {apod.date}
   />
   </section>
  )
}

export default App
