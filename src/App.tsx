'use client'
import React from 'react'
import './App.css'
import Button from './component/Button'

function App() {
  // const icon = <i>Click me!</i>
  // const [count, setCount] = React.useState(0)
  
  return (
      <div className='flex justify-center items-center h-screen'>
        <Button 
          // setCount = {setCount}
          // count = {count}
        >
          {/* {icon} */}
        </Button>
      </div>  
  )
}

export default App
