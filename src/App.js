import React, {useState} from 'react';
import './App.css';
import { Message } from './Message.js'
function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  return (
    <>
   <div className={`box ${isMorning ? 'dayLight' : ''}`}> 
    <h1>good {isMorning? 'Morning':'Night'}</h1> 
    <Message counter={count} />
    
    <br />

    <button onClick={() => setCount(count+1)}>click here</button>
   <button onClick={() => setMorning(!isMorning)}>update day</button>
  
   </div>
   </>   
     );
}

export default App;
