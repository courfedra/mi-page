import styled from "styled-components"
import {Link} from "react-router-dom"
import Theme from "../components/Themes"

const CourseItem=({datos})=>{
    return(
        <CourseCardStyled>
            <h2>{datos.curso}</h2>
            <p>{datos.academia}</p>
            <LinksDetailStyled>
                <Link to={`/cursos/${datos.categoria}`}><BotonCardDetailStyled>Entrar</BotonCardDetailStyled></Link>
                <ACardDetailStyled target="_blank" href={datos.certificado}>Certificado</ACardDetailStyled>
            </LinksDetailStyled>
        </CourseCardStyled>
    )
}
export default CourseItem


const CourseCardStyled = styled.div`
    border-radius: 15px;
    margin: 5px;
    padding: 5px;
    width: 80%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all .1s ease-in-out;
    border: 2px dotted ${Theme.colorLineaBorde};
    h2{color:${Theme.colorTitulo}}
    p{color: ${Theme.colorTxt}}
      
`
const LinksDetailStyled=styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        
`

const ACardDetailStyled=styled.a`
        text-decoration: none;
        width: 200px;
        padding: 5px;
        margin: 5px;
        border: 1px solid ${Theme.colorLineaBorde};
        border-radius: 5px;
        color: ${Theme.colorEnlace};
        letter-spacing: 2px;
        text-transform: uppercase;
        transition: all .25s ease-in-out;
        &:hover{
            background-color: ${Theme.colorBg};
        }
`
const BotonCardDetailStyled=styled.button`
        text-decoration: none;
        width: 200px;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        border: 1px solid ${Theme.colorLineaBorde};
        color: ${Theme.colorEnlace};
        background-color: transparent;
        letter-spacing: 2px;
        text-transform: uppercase;
        transition: all .25s ease-in-out;
        &:hover{
            background-color: ${Theme.colorBg};
        } 
`
