import NavBar from "../Components/NavBar"
import { Link } from "react-router-dom"
function Home(){
    return(
      <>
        <div className="container">
          <div className="textos-home">
            <h1>Olá</h1>
            <p>Bem-Vindo ao portal Senai</p>
          </div>
        </div>
        <div className="quadros">

        <div className="quadroAlunos">
          <div className="textoAlunos">
            <Link to="/alunos" className="textos"> Alunos
              <img src="https://cdn-icons-png.flaticon.com/512/7941/7941558.png" alt="" className="alunosIcone" />
            </Link>
           
          </div>
        </div>

          <div className="quadroTurmas">
            <div className="textoTurmas">
              <Link to="/turmas" className="textos">Turmas
                <img src="https://cdn-icons-png.flaticon.com/512/50/50001.png" alt="" className="turmasIcone" />
              </Link>
            </div>
          </div>
            <div className="quadroCursos">
              <div className="textoCursos">
                <Link to="/cursos" className="textos">Cursos
                  <img src="./iconeCursos.png" alt="" className="cursosIcone" />
                </Link>
              </div>
           </div>
          </div>
      </>
    )
}
export default Home