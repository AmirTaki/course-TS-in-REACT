import React, {  useCallback, useEffect, useState,  } from 'react'
import './App.css'

interface User {
  name: string, 
  age: number
}

function App() {
  
  const [count, setCount]  = useState<number>(0)
  const [users, setUsers] = useState<User[] | null >(null)
  
  useEffect(() => {
    console.log('mounting')
    console.log(`users: ${users}`)

    return () => {console.log ('unmounting')}
  }, [users])


  const addTwo = useCallback((e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>): void => {
    setCount((prev) => prev + 1)
    console.log(e)
  }, [])
  return (
      <div className='flex justify-center items-center h-screen'>
        <h1>{count}</h1>
        <button
          className='border-2 border-red-700'
          onClick={addTwo}
        >
          ADD
        </button>
      </div>  
  )
}

export default App
