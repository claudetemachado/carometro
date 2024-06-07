import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <>
            <div className="cadastrocontainer">
                <div className="cadastramento">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" alt="logo senai" className="senailogo" />
                <p className="titulocadastro">Faça cadastro no carômetro</p>

                    <div className="labelscadastro">
                        <label htmlFor="nome">Nome
                            <input type="text" />
                        </label>

                        <label htmlFor="email">Email 
                            <input type="email" />
                        </label>

                        <label htmlFor="cpf">CPF 
                            <input type="number" />
                        </label>

                        <label htmlFor="nomemae">Nome da mãe 
                            <input type="text" />
                        </label>

                        <label htmlFor="nomepai">Nome do pai
                            <input type="text" />
                        </label>

                        <label htmlFor="cep">CEP
                            <input type="number" />
                        </label>

                        <label htmlFor="cidade">Cidade
                            <input type="text" />
                        </label>

                        <label htmlFor="rua">Rua 
                            <input type="text" />
                        </label>

                        <label htmlFor="numero">Número 
                            <input type="number" />
                        </label>

                        <label htmlFor="bairro">Bairro
                            <input type="text" />
                        </label>

                        <label htmlFor="estado">Estado
                            <input type="text" />
                        </label>

                        <label htmlFor="senha">Senha
                            <input type="password" />
                        </label>

                        <label htmlFor="confirmarsenha">Confirmar senha 
                            <input type="password" />
                        </label>

                        <Link to="/login" className="possuocadastro">Já possuo cadastro</Link>
                        <Link to="/home">
                            <button type="button" className="botaocadastrar">Cadastrar</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Cadastro;
