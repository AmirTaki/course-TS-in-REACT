import {  useState } from 'react'
import './App.css'

interface User {
  name: string, 
  age: number
}
function App() {
  
  const [conter, setConter]  = useState<number>(0)
  const [user, setUser] = useState<User[] | null >(null)
  
  return (
      <div className='flex justify-center items-center h-screen'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam reprehenderit nam, perspiciatis error vitae deleniti optio, non impedit porro voluptates minima eligendi excepturi obcaecati at quae? Nemo, hic? Eligendi.
      </div>  
  )
}

export default App
