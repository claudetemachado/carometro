import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Pages/Header/NavBar'
import Login from './Pages/Login/Login'
import Cadastro from './Pages/Cadastro/Cadastro'
import Home from './Pages/Home/Home'
import Turmas from './Pages/Turmas/Turmas'
import Idev1 from './Pages/Idev1/Idev1'
import Idev2 from './Pages/Idev2/Idev2'
import Idev3 from './Pages/Idev3/Idev3'
import Ieleimec1 from './Pages/Ieleimec1/Ieleimec1'
import Ieleimec2 from './Pages/Ieleimec2/Ieleimec2'
import Ieleimec3 from './Pages/Ieleimec3/Ieleimec3'
import Consultas from './Pages/Consultas/Consultas'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/turmas' element={<Turmas/>}/>
          <Route path='/idev1' element={<Idev1/>}/>
          <Route path='/idev2' element={<Idev2/>}/>
          <Route path='/idev3' element={<Idev3/>}/>
          <Route path='/ieleimec1' element={<Ieleimec1/>}/>
          <Route path='/ieleimec2' element={<Ieleimec2/>}/>
          <Route path='/ieleimec3' element={<Ieleimec3/>}/>
          <Route path='/consultas' element={<Consultas />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
