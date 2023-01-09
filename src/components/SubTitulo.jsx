import styled from "styled-components"
import Theme from "./Themes"

const H2SubTitulo=styled.div`
    width: 100%;
    min-height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    //background-color: ${Theme.colorBg};
    background-image: url("https://i.ibb.co/XFJHff7/react-Back-Ground.jpg");
    background-size: cover;
    background-attachment:fixed ; 
    color: ${Theme.colorTitulo};
    a{
        color:${Theme.colorEnlace};
        padding: 5px;
        text-decoration: none;
        &:hover{
            color:${Theme.colorEnlaceHover}
        }
    }
    
`
const SubTitulo = ({texto,id})=>{
    return(
        <H2SubTitulo>
            <h2 id={id}>{texto}</h2>
            <a href="#inicio">Volver a Inicio</a>
        </H2SubTitulo>
    )
}
export default SubTitulo