import {Link} from "react-router-dom"
import { useContext } from "react"
import {ColorContext} from "../context/ColorContext"
import styled from "styled-components"
const CourseCard = ({datos}) =>{
    const {colorBg,colorTxt,colorTitulo,colorLineaBorde,colorEnlace,colorEnlaceHover}=useContext(ColorContext)
    const CourseCardStyled = styled.div`
    
        background-color: ${colorBg};
        color: ${colorBg};
        border-radius: 15px;
        margin: 5px;
        padding: 5px;
        width: 50%;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: all .1s ease-in-out;
        h2{color:${colorBg}}
        p{color: ${colorBg}}
        &:hover{
            background-color: ${colorBg};
            h2{color:${colorBg}};
        }
        .linksDetail{
            display: flex;
            width: 100%;
            justify-content: space-around;
            align-items: center;
            .aCardDetail{
                text-decoration: none;
                width: 200px;
                padding: 5px;
                margin: 5px;
                border: 1px solid ${colorBg};
                border-radius: 5px;
                color: ${colorBg};
                letter-spacing: 2px;
                text-transform: uppercase;
                transition: all .25s ease-in-out;
                &:hover{
                    background-color: ${colorBg};
                    color: ${colorBg};
                    border: 1px solid ${colorBg};
                }
            }
            .btnCardDetail{
                text-decoration: none;
                width: 200px;
                padding: 5px;
                margin: 5px;
                border-radius: 5px;
                border: 1px solid ${colorBg};
                color: ${colorBg};
                background-color: transparent;
                letter-spacing: 2px;
                text-transform: uppercase;
                transition: all .25s ease-in-out;
                &:hover{
                    background-color: ${colorBg};
                    color: ${colorBg};
                    border: 1px solid ${colorBg};
                }  
            }
        }   
        `






    return(
        <CourseCardStyled>
            <h2>{datos.curso}</h2>
            <p>{datos.academia}</p>
            <div className="linksDetail">
                <Link to={`/cursos/${datos.categoria}`}><button className="btnCardDetail">Entrar</button></Link>
                <a target="_blank" className="aCardDetail" href={datos.certificado}>Certificado</a>
            </div>
        </CourseCardStyled>
    )
}
export default CourseCard