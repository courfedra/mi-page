import {Link} from "react-router-dom"
import styled from "styled-components"
import Theme from "../Themes"
import ListTopic from "./ListTopic"
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CourseDetail = ({datos})=>{
    return(
        <SkeletonTheme 
            baseColor={Theme.colorBg} 
            highlightColor={Theme.colorTitulo}
            duration=".5">
            <CourseDetailItemStyled> 
                <h3><span>Curso: </span>{datos.curso || <Skeleton/>}</h3>
                <h4><span>Docente: </span>{datos.profesor || <Skeleton/>}</h4>
                <h4><span>Academia: </span>{datos.academia || <Skeleton/>}</h4>
                <ListTopic topicos={datos.descripcion}/>
                <Link to="/cursos"><button className="btnBack">Volver a Inicio</button></Link>
            </CourseDetailItemStyled>
        </SkeletonTheme>

    )
}
export default CourseDetail

const CourseDetailItemStyled=styled.div`
    transition: all .1s ease-in-out;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    background-color: ${Theme.colorBg};
    h3,h4{
        width: 80%;
        padding: 5px;
        margin: 5px;
        color: ${Theme.colorTxt};
    }
    span{color:${Theme.colorTitulo}}
    position: relative;
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
    padding-top: 10%;
    @media screen and (max-width:900px){
        padding-top:15%
    }
`
