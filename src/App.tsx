import './App.css'
import Button from './component/Button'

function App() {

  return (
      <div className='flex justify-center items-center h-screen'>
        <Button
          borderRadius = {{
            topLeft: 5,
            topRight: 5,
            bottomRight: 10,
            bottomLeft: 10
          }}
        
        />
      </div>  
  )
}

export default App
