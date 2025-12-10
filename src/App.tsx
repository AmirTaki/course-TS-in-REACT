import './App.css'
import Button from './component/Button'

function App() {

  const onClick = (test: string) => {
    console.log(test)
    return 5
  }
  return (
      <div className='flex justify-center items-center h-screen'>
        <Button
          onClick = {onClick}
        
        />
      </div>  
  )
}

export default App
