import React, { useEffect } from 'react';
import axios from 'axios';
import Login from './components/login'
import Video from './components/trailer'


function App() {

  // useEffect(()=>{
  //   axios.get('/teste').then(result => {
  //       console.log(result)
  //     })
  // },[])

  return (
    <div className="App">
      <Video />
      <Login />
 
    </div>
  );
}

export default App;
