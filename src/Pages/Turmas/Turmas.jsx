import NavBar from "../Header/NavBar"
import { Link } from "react-router-dom"
function Turmas(){
    return(
        <>
        <NavBar/>
        <div className="">
            <h1 className="titulo">Turmas</h1>
            <div className="turmas">
                <div className="turmasIdev">
                    <Link to="/idev1" className="textoIdev">IDEV 1
                        <div className="perfilIdev">
                            <img src="" alt="" />
                        </div>
                    </Link>
                </div>

                <div className="turmasIdev">
                    <Link to="/idev2" className="textoIdev">IDEV 2                </Link>
                </div>

                <div className="turmasIdev">
                    <Link to="/idev3" className="textoIdev">IDEV 3
                        <div className="perfilIdev">
                            <img src="" alt="" />
                        </div>
                    </Link>
                    
                </div>
  
                    <div className="turmasIeleImec">
                        <Link to="/ieleimec1" className="textoIeleImec">IELE/IMEC 1
                            <div className="perfilIeleImec">
                                <img src="" alt="" />
                            </div>
                        </Link>
                    </div>

                    <div className="turmasIeleImec">
                        <Link to="/ieleimec2" className="textoIeleImec">IELE/IMEC 2
                            <div className="perfilIeleImec">
                            </div>
                        </Link>
                    </div>

                    <div className="turmasIeleImec">
                        <Link to="/ieleimec3" className="textoIeleImec">IELE/IMEC 3
                            <div className="perfilIeleImec">
                                <img src="" alt="" />
                            </div>
                        </Link>
                    </div>

            </div>
           
        </div>
     </>
    )
}
export default Turmas