'use client'
import { useRef } from 'react'
import './App.css'
import Button from './component/Button'
function App() {
  
  const ref:React.RefObject<null> =  useRef(null)

  return (
      <div className='flex justify-center items-center h-screen'>
        <Button 
          ref = {ref}
          type = 'submit'
          autoFocus = {true}
          defaultValue='test'
          className='bg-red-700'
        >
          ClickMe
        </Button>
      </div>  
  )
}

export default App
