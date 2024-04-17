import './NavBar.css'
function NavBar(){
    return(
        <div className='navbar'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" alt="logo senai" className="logoSenai" />
            <div className="rotas">
                <a href="/home">Home</a>&nbsp;&nbsp;&nbsp;
                <a href="/tirarfoto">Tirar foto</a>&nbsp;&nbsp;
                <a href="/consultas">Consultas</a>&nbsp;&nbsp;&nbsp;
                <a href="/alunos">Alunos</a>&nbsp;&nbsp;
                <a href="/matriculas">Matriculas</a>&nbsp;&nbsp;
                <a href="/turmas">Turmas</a>&nbsp;&nbsp;
                <a href="/Cursos">Cursos</a> <br />
            </div>
        </div>
    )
}
export default NavBar