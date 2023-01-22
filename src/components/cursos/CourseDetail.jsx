import {Link} from "react-router-dom"
import styled from "styled-components"
import Theme from "../Themes"

const CourseDetail = ({datos})=>{

    return(
        <CourseDetailItemStyled> 
            <h3><span>Curso: </span>{datos.curso}</h3>
            <h4><span>Docente: </span>{datos.profesor}</h4>
            <h4><span>Academia: </span>{datos.academia}</h4>
            <p>{datos.descripcion}</p>
            <Link to="/cursos"><button className="btnBack">Volver a Inicio</button></Link>
        </CourseDetailItemStyled>

    )
}
export default CourseDetail

const CourseDetailItemStyled=styled.div`
    transition: all .1s ease-in-out;
    width: 100%;
    min-height: 110%;
    overflow: hidden;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${Theme.colorBg};
    border: 2px solid ${Theme.colorLineaBorde};
    h3,h4,p{
        padding: 10px;
        margin: 10px;
        color: ${Theme.colorTxt};
    }
    span{color:${Theme.colorTitulo}}
    .btnBack{
        background-color: ${Theme.colorBg};
        padding: 5px 10px;
        border: 2px solid ${Theme.colorLineaBorde};
        transition: all .1s ease-in-out;
        color:${Theme.colorEnlace};
        &:hover{
            color: ${Theme.colorEnlaceHover};
            background-color: ${Theme.colorBgHover};
        }            
    }
`
