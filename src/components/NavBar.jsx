
import { useContext } from "react"
import{Link} from "react-router-dom"
import styled from "styled-components"
import Theme from "./Themes"

const Navbar = styled.nav`
        width: 100%;
        min-height: 10vh;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${Theme.colorBg};
        border-bottom: 2px solid ${Theme.colorLineaBorde};
        
    `
    
    const NavbarLogo = styled.div`
            text-decoration: none;
            img{
                width: 75px;
            }
            `

    const NavbarLink = styled.div`
                margin: 5px;
                padding: 5px;
                a{
                    font-size: 1.2em;
                    letter-spacing: 1.5px;
                    color: ${Theme.colorEnlace};
                    text-decoration: none;
                    padding: 5px;
                    margin: 5px;
                    &:hover{
                        color:${Theme.colorEnlaceHover}
                    }
                }
                
        `
const NavBar = ()=>{

    return(
        <>
            <Navbar>
                <NavbarLogo>
                    <Link to="/">
                        <img id="inicio" src="https://i.ibb.co/McFX1qT/Logo-Frontend-removebg-preview.png"/>
                    </Link>
                </NavbarLogo>
                <NavbarLink>
                    <a href="#cursos">Cursos</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#perfil">Perfil</a>
                </NavbarLink>
            </Navbar>
        </>
    )
}

export default NavBar