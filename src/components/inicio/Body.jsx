import styled from "styled-components"
import Inicio from './Inicio'
import Skills from "./Skills"

const BodyStyled = styled.main`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        `
    
const Body = ()=>{

    return(
        <BodyStyled>
            <Inicio/>
            <Skills/>
        </BodyStyled>
    )
}

export default Body