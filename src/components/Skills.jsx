import styled from "styled-components"
import Theme from "./Themes"

const Skills =()=>{
    return(
        <HardSkillsStyled>
            <h2>HTML</h2>
            <h2>Css</h2>
            <h2>Javascript</h2>
            <h2>React JS</h2>
        </HardSkillsStyled>
    )
}

export default Skills

const HardSkillsStyled=styled.div`
    width: 100%;
    height: 50vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: violet;
`