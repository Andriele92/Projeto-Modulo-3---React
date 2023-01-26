import { useState } from 'react'
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import Cabecalho from '../src/components/Cabecalho'
import Rodape from './components/Rodape'
import './App.css?inline'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
    
  )
}

export default App
