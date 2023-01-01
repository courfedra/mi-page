import styled from "styled-components"
import {useContext} from "react"
import {ColorContext} from "../context/ColorContext"


    const {colorBg,colorLineaBorde,colorTxt,colorTitulo,colorEnlace,colorEnlaceHover}=useContext(ColorContext)

    export const Navbar = styled.nav`
        width: 100%;
        min-height: 10vh;
        background-color: ${colorBg}33;
        position: sticky;
        border-bottom: 2px solid ${colorLineaBorde};
        top: 0;
        z-index: 100;
        `

    export const NavbarLogo = styled.div`
            text-decoration: none;
            img{width: 75px}`

    export const NavbarLink = styled.div`
            text-decoration: none;
            margin: 0 5px;
            a{
                color: ${colorEnlace};
                &:hover{color:${colorEnlaceHover}}
            }  
    `