import styled from "styled-components"
import Inicio from "../pages/Inicio"
import Course from "../pages/Course"
import Perfil from "../pages/Perfil"
import Proyects from "../pages/Proyects"


const BodyStyled = styled.main`
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        `
    
const Body = ()=>{

    return(
        <BodyStyled>
            <Inicio/>
            <Course/>
            <Proyects/>
            <Perfil/>
        </BodyStyled>
    )
}

export default Body