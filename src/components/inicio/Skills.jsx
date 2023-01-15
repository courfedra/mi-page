import styled from "styled-components"
import Theme from "../Themes"
import BoxSkill from "./BoxSkill"
import SubTitulo from "../SubTitulo"

const hardSkill=["HTML","CSS","JS","React","Firebase","Bootstrap","Sass"]
const softSkill=["Imaginativo","Autodidacta","sencillo","minimalista","Sincero"]


const Skills =()=>{
    return(
        <>
            <SkillsStyled>
                <SubTitulo texto="Hard Skills"/>
                {hardSkill.map(elem=><BoxSkill key={hardSkill.indexOf(elem)} texto={elem}/>)}
            </SkillsStyled>
            <SkillsStyled>
                <SubTitulo texto="Soft Skills"/>
                {softSkill.map(elem=><BoxSkill key={softSkill.indexOf(elem)} texto={elem}/>)}
            </SkillsStyled>
        </>
    )
}

export default Skills

const SkillsStyled=styled.div`
    width: 100%;
    padding: 10px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
