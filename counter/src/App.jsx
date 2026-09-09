import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='container'>
        <div className="count-box">
          <div className='counter'>Your Count is {count}</div>
        </div>
        
        <button onClick={() => setCount(count + 1)} >COUNT</button>
      </div>
    </>
  )
}

export default App
