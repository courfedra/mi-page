import {Link} from "react-router-dom"
import {ColorContext} from "../context/ColorContext"
import styled from "styled-components"
const CourseCard = ({datos}) =>{
    const {colorBg,colorTxt,colorTitulo,colorLineaBorde,colorEnlace,colorEnlaceHover}=useContext(ColorContext)
    const courseCard = styled.div`
    
        background-color: $grisClaro;
        color: $negro;
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
        h2{color:$negro}
        p{color: $negro}
        &:hover{
            background-color: $blanco;
            h2{color:$rojo};
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
                border: 1px solid $rojo;
                border-radius: 5px;
                color: $rojo;
                letter-spacing: 2px;
                text-transform: uppercase;
                transition: all .25s ease-in-out;
                &:hover{
                    background-color: $rojo;
                    color: $negro;
                    border: 1px solid $negro;
                }
            }
            .btnCardDetail{
                text-decoration: none;
                width: 200px;
                padding: 5px;
                margin: 5px;
                border-radius: 5px;
                border: 1px solid $azul;
                color: $azul;
                background-color: transparent;
                letter-spacing: 2px;
                text-transform: uppercase;
                transition: all .25s ease-in-out;
                &:hover{
                    background-color: $azul;
                    color: $negro;
                    border: 1px solid $negro;
                }  
            }
        }   
        `






    return(
        <div className="courseCard">
            <h2>{datos.curso}</h2>
            <p>{datos.academia}</p>
            <div className="linksDetail">
                <Link to={`/cursos/${datos.categoria}`}><button className="btnCardDetail">Entrar</button></Link>
                <a target="_blank" className="aCardDetail" href={datos.certificado}>Certificado</a>
            </div>
        </div>
    )
}
export default CourseCard