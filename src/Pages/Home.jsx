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
        <div className="turmas">
            <div className="turmasIdev">
              <Link to="/idev1" className="textoIdev">IDEV 1</Link>
            </div>

            <div className="turmasIdev">
                <Link to="/idev2" className="textoIdev">IDEV 2</Link>
            </div>

            <div className="turmasIdev">
                <Link to="/idev3" className="textoIdev">IDEV 3</Link>   
            </div>

            <div className="turmasIeleImec">
                <Link to="/ieleimec1" className="textoIeleImec">IELE/IMEC 1</Link>
            </div>

            <div className="turmasIeleImec">
                <Link to="/ieleimec2" className="textoIeleImec">IELE/IMEC 2</Link>
            </div>

            <div className="turmasIeleImec">
                <Link to="/ieleimec3" className="textoIeleImec">IELE/IMEC 3</Link>
            </div>
        </div>
      </>
    )
}
export default Home