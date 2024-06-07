import { Link } from "react-router-dom";

function PagEntrada(){
    return(
        <>
            <div className="">
               <div className="fundoentrada">
                    <div className="containerinicial">
                          <div className="">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" alt="logo senai" className="senaientrada" />
                          <p className="tituloentrada">Entre no carômetro com uma conta</p>
                            <div className="botoesentrada">
                                <Link to="/login">
                                        <button type="button" className="botaologin">Login</button>
                                </Link>
                                <Link to="/cadastro">
                                        <button type="button" className="botaocadastro">Cadastro</button>
                                </Link>
                            </div>
                          </div>
                    </div>
               </div>
            </div>
        </>
    )
}
export default PagEntrada