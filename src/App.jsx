import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import TirarFoto from './Pages/TirarFoto'
import Consultas from './Pages/Consultas'
import Alunos from './Pages/Alunos'
import Matriculas from './Pages/Matriculas'
import Turmas from './Pages/Turmas'
import Cursos from './Pages/Cursos'
function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/tirarfoto' element={<TirarFoto/>}/>
          <Route path='/consultas' element={<Consultas/>}/>
          <Route path='/alunos' element={<Alunos/>}/>
          <Route path='/matriculas' element={<Matriculas/>}/>
          <Route path='/turmas' element={<Turmas/>}/>
          <Route path='/cursos' element={<Cursos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
