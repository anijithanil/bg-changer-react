
import { useState } from 'react';
import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [color,setColor] = useState('blue')
  
  function colorChange(data){
    console.log('fun called');
    setColor(data)
    
  }

  return (
    <>
      <div className='bg' style={{background:color}}>
        <button onClick={()=>colorChange('red')}>Red</button>
        <button onClick={()=>colorChange('yellow')}>Yellow</button>
        <button onClick={()=>colorChange('green')}>Green</button>
        <button onClick={()=>colorChange('blue')}>Blue</button>
        <button onClick={()=>colorChange('orange')}>Orange</button>
      </div>
    </>
  )
}

export default App
