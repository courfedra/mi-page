
import{Link} from "react-router-dom"
import Botones from "./Botones"
const NavBar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navegador">
            <div className="container-fluid">
                <Link to="/" className="navbarLogo"><img src="https://i.ibb.co/McFX1qT/Logo-Frontend-removebg-preview.png"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link navbarLink" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cursos" className="nav-link navbarLink" href="#">Cursos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/proyectos" className="nav-link navbarLink" href="#">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/perfil" className="nav-link navbarLink">Perfil</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar