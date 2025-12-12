'use client'
import './App.css'
import Button from './component/Button'
function App() {
  

  return (
      <div className='flex justify-center items-center h-screen'>
        <Button countValue = {1} countHistory = {[1, 2, 3, 4]} />
      </div>  
  )
}

export default App
