import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import App from './App'
import './index.css'
import Cadastro from './Pages/Cadastro'
import Home from './Pages/Home'
import Produtos from './Pages/Produtos'
import Sobre from './Pages/Sobre'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route element={<App />}>
      <Route path="/" element={<Home />}/>
      <Route path="/produtos" element={<Produtos />}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/cadastro" element={<Cadastro />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
