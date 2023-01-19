import styled from "styled-components"
import Inicio from './Inicio'
import Skills from "./Skills"
import Contacto from "./Contacto"

const Body = ()=>{

    return(
        <>
            <BodyStyled>
                <Inicio/>
                <Contacto/>
                <Skills/>
            </BodyStyled>
        </>
    )
}

export default Body

const BodyStyled = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
    