import { useState } from 'react'
import './App.css'
import Input from "./components/Input"
import Poxedex from './components/Poxedex'
function App() {
    let [name, setName] = useState("")
  return (
    <>
    <Input setName = {setName} />
    {console.log(name)}
    <Poxedex name = {name} />
    </>
  )
}

export default App
