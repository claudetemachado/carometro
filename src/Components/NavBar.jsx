import './NavBar.css'
function NavBar(){
    return(
        <div className='navbar'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" alt="logo senai" className="logoSenai" />
            <div className="rotas">
                <a href="/home" className='rotas'>Home</a>&nbsp;&nbsp;&nbsp;
                <a href="/tirarfoto" className='rotas'>Tirar foto</a>&nbsp;&nbsp;
                <a href="/consultas" className='rotas'>Consultas</a>&nbsp;&nbsp;&nbsp;
                <a href="/alunos" className='rotas'>Alunos</a>&nbsp;&nbsp;
                <a href="/matriculas" className='rotas'>Matriculas</a>&nbsp;&nbsp;
                <a href="/turmas" className='rotas'>Turmas</a>&nbsp;&nbsp;
                <a href="/Cursos" className='rotas'>Cursos</a> <br />
            </div>
        </div>
    )
}
export default NavBar