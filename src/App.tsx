'use client'
import './App.css'
import Button from './component/Button'

function App() {
  
  return (
      <div className='flex justify-center items-center h-screen'>
        <Button 
          type = 'submit'
          autoFocus = {true}
        >
          ClickMe
        </Button>
      </div>  
  )
}

export default App
