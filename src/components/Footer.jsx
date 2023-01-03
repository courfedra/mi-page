import {ColorContext} from "../context/ColorContext"
import { useContext } from "react"
import styled from "styled-components"

const Footer = ()=>{

    const {colorBg,colorTxt,colorTitulo,colorLineaBorde,colorEnlace,colorEnlaceHover}=useContext(ColorContext)

    const Pie = styled.main`
        border-top: 2px solid ${colorLineaBorde};
        background-color:${colorBg};
        min-height: 15vh;
        padding: 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        ul{
            display: flex;
            width: 100%;
            justify-content: space-around;
            align-items: center;
            list-style: none;
            a{
                text-decoration: none;
                letter-spacing: 1.5px;
                color: ${colorEnlace};
                &:hover{
                    color: ${colorEnlaceHover};
                }
            }
        }
        img{
            width: 100px;
        }
    `


    return(
        <Pie>
            <img src="public/logoShorcut.png" alt="Logo Footer" />
            <ul>
                <li><a target="_blank" href="https://www.linkedin.com/in/franandres/">Linkedin</a></li>
                <li><a target="_blank" href="https://github.com/courfedra">Github</a></li>
                <li><a target="_blank" href="#">Proximamente</a></li>
            </ul>
        </Pie>
    )
}

export default Footer;