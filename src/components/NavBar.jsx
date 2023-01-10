import{Link} from "react-router-dom"
import styled from "styled-components"
import Theme from "./Themes"
import logoPage from "../../public/logoPage.svg"
import {RxHamburgerMenu} from "react-icons/Rx"
import { useEffect } from "react"

let topPosition="100px"

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
        height: 75px;
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
    @media screen and (max-width:900px) {
        position: absolute;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: ${topPosition};
        width: 100%;
        left: 0;
        right: 0;
        background-color: ${Theme.colorBg};
    }
    
    `
const HambMenuStyled = styled.button`
    display: none;
    @media screen and (max-width:900px){
        background-color: transparent;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 10px;
        &:active{
            background-color: ${Theme.colorBgHover};
        }
    }
    `
const mostrarMenu=()=>{
    console.log("Active el menu");
}


const NavBar = ()=>{

    return(
        <>
            <Navbar>
                <NavbarLogo>
                    <Link to="/">
                        <img src={logoPage} alt="Logo Franandres"/>
                    </Link>
                </NavbarLogo>
                <NavbarLink>
                    <Link to="/">Inicio</Link>
                    <Link to="/cursos">Cursos</Link>
                    <Link to="/proyectos">Proyectos</Link>
                    <Link to="/perfil">Perfil</Link>
                </NavbarLink>
                <HambMenuStyled onClick={mostrarMenu}>
                    <RxHamburgerMenu fontSize={"1.5em"} color={"#e9c893"}/>
                </HambMenuStyled>
            </Navbar>
        </>
    )
}

export default NavBar