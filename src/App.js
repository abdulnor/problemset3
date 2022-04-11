import './App.css';
import React from 'react';
import { useState } from 'react';
import Card from './card';


function App() {
  const [state , setState] = useState(
    {

      init:0

    }
    
  )
  function update(num) {
        setState
        ((state) => (
          {
            ...state ,
            init : state.init + num
          }
        ))          
  }
  return (
  <div >
    <div className='header'>
      <h1>
      Total items in cart ({state.init}) 
      </h1>
    </div>
    <div className='container'>
      <Card name="boot" img="pic1.jpg" updateTItal={update}/>
      <Card name="boot" img="pic2.jpg" updateTItal={update}/>
      <Card name="boot" img="pic3.jpg" updateTItal={update}/>
      <Card name="boot" img="pic4.jpg" updateTItal={update}/>
      <Card name="boot" img="pic5.jpg" updateTItal={update}/>
      <Card name="boot" img="pic6.jpg" updateTItal={update}/>
    </div>
    

  </div>
   
  );
}

export default App;