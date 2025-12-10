import './App.css'
import Button from './component/Button'

function App() {

  return (
      <div className='flex justify-center items-center h-screen'>
        <Button style={{
          backgroundColor: 'red', 
          fontSize: 30, 
          color: 'white',
          padding : `${10}px ${20}px ${30}px ${40}px`,
          border: '10px solid yellow',
        }}/>
      </div>  
  )
}

export default App
