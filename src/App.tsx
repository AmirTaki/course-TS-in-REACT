import {  useState } from 'react'
import './App.css'

interface User<T, K> {
  name: T, 
  age: K
}
function App() {
  
  const [conter, setConter]  = useState <Array<User<string, number>> | null>([])
  
  const [user, setUser] = useState<User <number, string>> ({} as User<number, string>)
  return (
      <div className='flex justify-center items-center h-screen'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam reprehenderit nam, perspiciatis error vitae deleniti optio, non impedit porro voluptates minima eligendi excepturi obcaecati at quae? Nemo, hic? Eligendi.
      </div>  
  )
}

export default App
