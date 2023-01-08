
import { useContext } from "react"
import{Link} from "react-router-dom"
import styled from "styled-components"
import Theme from "./Themes"
import {ColorContext} from "../context/ColorContext"

const Navbar = styled.nav`
        width: 100%;
        min-height: 10vh;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        background-color: ${Theme.colorBg};
        border-bottom: 2px solid ${Theme.colorLineaBorde};
        
    `
    
    const NavbarLogo = styled.div`
            text-decoration: none;
            img{width: 75px}
            `

    const NavbarLink = styled.div`
                margin: 5px;
                padding: 5px;
                a{
                    font-size: 1.2em;
                    letter-spacing: 1.5px;
                    color: ${Theme.colorEnlace};
                    text-decoration: none;
                    &:hover{
                        color:${Theme.colorEnlaceHover}
                    }
                }
                
        `
const NavBar = ()=>{
    const {nombrePagina} = useContext(ColorContext);

    return(
        <>
            <Navbar>
                <NavbarLogo>
                    <Link to="/">
                        <img src="https://i.ibb.co/McFX1qT/Logo-Frontend-removebg-preview.png"/>
                    </Link>
                </NavbarLogo>
                <NavbarLink>
                    <Link to="/" href="#">{nombrePagina}</Link>
                </NavbarLink>
            </Navbar>
        </>
    )
}

export default NavBar