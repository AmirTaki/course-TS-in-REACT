import './App.css'
import Button from './component/Button'

function App() {

  const icon = <i>Click me!</i>
  return (
      <div className='flex justify-center items-center h-screen'>
        <Button>{icon}</Button>
      </div>  
  )
}

export default App
