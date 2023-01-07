
import{Link} from "react-router-dom"
import styled from "styled-components"
import Botones from "./Botones"
import {useContext} from "react"
import {ColorContext} from "../context/ColorContext"

const NavBar = ()=>{
    const {colorBg,colorLineaBorde,colorEnlace,colorEnlaceHover}=useContext(ColorContext)

    const Navbar = styled.nav`
        width: 100%;
        min-height: 10vh;
        background-color: ${colorBg};
        position: sticky;
        border-bottom: 2px solid ${colorLineaBorde};
        top: 0;
        z-index: 100;
        `

    const NavbarLogo = styled.div`
            text-decoration: none;
            img{width: 75px}`

    const NavbarLink = styled.div`
            text-decoration: none;
            margin: 0 5px;
            a{
                color: ${colorEnlace};
                &:hover{color:${colorEnlaceHover}}
            }
            `

    return(
        <>
            <Navbar className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <NavbarLogo>
                        <Link to="/">
                            <img src="https://i.ibb.co/McFX1qT/Logo-Frontend-removebg-preview.png"/>
                        </Link>
                    </NavbarLogo>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavbarLink>
                                    <Link to="/" className="nav-link" href="#">Inicio</Link>
                                </NavbarLink>
                            </li>
                            <li className="nav-item">
                                <NavbarLink>
                                    <Link to="/cursos" className="nav-link" href="#">Cursos</Link>
                                </NavbarLink>
                            </li>
                            <li className="nav-item">
                                <NavbarLink>
                                    <Link to="/proyectos" className="nav-link" href="#">Proyectos</Link>
                                </NavbarLink>
                            </li>
                            <li className="nav-item">
                                <NavbarLink>
                                    <Link to="/perfil" className="nav-link">Perfil</Link>
                                </NavbarLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default NavBar