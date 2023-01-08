import Theme from "./Themes"
import styled from "styled-components"


const Pie = styled.main`
        border-top: 2px solid ${Theme.colorLineaBorde};
        background-color:${Theme.colorBg};
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
                color: ${Theme.colorEnlace};
                &:hover{
                    color: ${Theme.colorEnlaceHover};
                }
            }
        }
        img{
            width: 100px;
        }
        `

const Footer = ()=>{

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