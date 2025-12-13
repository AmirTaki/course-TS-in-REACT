import React, {  useCallback, useEffect, useMemo, useState,  } from 'react'
import './App.css'

interface User {
  name: string, 
  age: number
}

type fibFunc = (n: number)  => number

const fib: fibFunc = (n) => {
  if (n < 2){ return 1}
  else {
    // return fib(n - 1) + fib(n + 2)
    return fib(n - 1)
  }
}

const myNum: number = 30;

// console.log(fib(myNum))


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


  const results = useMemo<number>(() => fib(myNum), [myNum])

  return (
      <div className='flex justify-center items-center h-screen'>
        <h1>{count}</h1>
        <button
          className='border-2 border-red-700'
          onClick={addTwo}
        >
          ADD
        </button>

        <h2 className='bg-emerald-400'>{results}</h2>
      </div>  
  )
}

export default App

// https://www.youtube.com/watch?v=2NEV_M7NN6k

//https://www.youtube.com/results?search_query=hook+in+ract+ts