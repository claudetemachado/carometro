import NavBar from "../Header/NavBar"
import { Link } from "react-router-dom"
function Home(){
    return(
      <>
        <NavBar/>
        <div className="imagemfundo">
          <div className="container">
            <div className="textos-home">
              <h1>Bem - Vindo</h1>
              <p>ao carômetro do senai</p>
            </div>
          </div>
        </div>
      </>
    )
}
export default Home