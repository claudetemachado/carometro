import { Link } from "react-router-dom";
function Login() {
    return(
        <>
           <div>
                <div className="logincontainer"> 
                    <div className="fundologin">
                            <div className="inputs">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" alt="logo senai" className="senailogologin" />
                                <p className="titulologin">Faça login no carômetro</p>
                                <label htmlFor="" className="labelemail">Email
                                <input type="text" className="email"/> 
                                </label>
                                <label htmlFor="" className="labelsenha">Senha
                                <input type="password" className="senha"/>
                                </label>
                                <Link to="/home">
                                    <button type="button" className="botaoentrar">Entrar</button>
                                </Link>
                                <Link to="/cadastro" className="linkcadastro">Não possuo cadastro </Link>
                            </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Login;