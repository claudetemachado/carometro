import './NavBar.css'
function NavBar(){
    return(
        <div className='navbar'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" alt="logo senai" className="logoSenai" />
            <div className="rotas">
                <a href="/home" className='rotas'>Home</a>&nbsp;&nbsp;&nbsp;
                <a href="/alunos" className='rotas'>Alunos</a>&nbsp;&nbsp;
            </div>
        </div>
    )
}
export default NavBar