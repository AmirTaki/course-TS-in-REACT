import './App.css'
import Button from './component/Button'

function App() {

  return (
      <div className='flex justify-center items-center h-screen'>
        <Button backgroundColor = {'red'} size = {30} textColor= {'white'}  padding={[5, 10 , 20, 30]}/>
      </div>  
  )
}

export default App
