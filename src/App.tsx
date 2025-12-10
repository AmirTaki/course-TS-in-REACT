import './App.css'
import Button from './component/Button'

function App() {

  return (
      <div className='flex justify-center items-center h-screen'>
        <Button backgroundColor = {'red'} size = {30} textColor= {'white'}  padding={['5px', '10px']}/>
      </div>  
  )
}

export default App
