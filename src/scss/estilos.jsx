import styled from "styled-components"
import {ColorContext} from "../context/ColorContext"
import {useContext} from "react"

const {colorBg,colorTxt,colorTitulo}=useContext(ColorContext);

export const Navbar = styled.nav`
        margin: 0 20px;
        min-height: 10vh;
        background-color: ${colorBg};
        color: ${colorTxt};
        border-bottom: 2px solid ${colorTxt};
        position: sticky;
        top: 0;
        z-index: 100;
        .navbarLogo{
            text-decoration: none;
            color: ${colorTxt};
            img{
                width: 75px;
            }  
        }
        .navbarLink{
            text-decoration: none;
            margin: 0 5px;
            color: ${colorTitulo};
            &:hover{
                color:${colorBg};
            }
        }
`
    