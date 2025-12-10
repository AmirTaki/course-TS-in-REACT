import './App.css'
import Button from './component/Button'

function App() {

  return (
      <div className='flex justify-center items-center h-screen'>
        <Button style={{
          backgroundColor: 'red', 
          size: 30, 
          textColor: 'white',
          padding : `${10}px ${20}px ${30}px ${40}px`

        }}/>
      </div>  
  )
}

export default App
