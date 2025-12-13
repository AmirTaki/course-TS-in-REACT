import './App.css'
import Controls from './component/controls'
import Display from './component/display'
import { CounterProvider, useCounter } from './shared/context'

function AppContent() {
  const { state, dispatch } = useCounter()
  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-black text-white">
      <Display {...state} />
      <Controls handler={dispatch} />
    </div>
  )
}

function App() {
  return (
    <CounterProvider>
      <AppContent />
    </CounterProvider>
  )
}

export default App

// https://www.youtube.com/watch?v=2NEV_M7NN6k

//https://www.youtube.com/results?search_query=hook+in+ract+ts