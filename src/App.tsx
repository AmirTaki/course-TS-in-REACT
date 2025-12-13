import './App.css'
import Child from './component/Child'

function App() {
  

  return (
      <div className=" flex flex-col justify-center items-center h-screen">
        <Child >
          {(num: number) => <>Current Count : {num}</>}
        </Child>
      </div>
  )
}

export default App

// https://www.youtube.com/watch?v=2NEV_M7NN6k

//https://www.youtube.com/results?search_query=hook+in+ract+ts