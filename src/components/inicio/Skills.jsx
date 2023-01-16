import styled from "styled-components"
import Theme from "../Themes"
import BoxSkill from "./BoxSkill"
import SubTitulo from "../SubTitulo"
import { hardSkill,softSkill } from "../../data/skills"

const Skills =()=>{
    return(
        <>
            <SkillsStyled>
                <SubTitulo texto="Hard Skills"/>
                {hardSkill.map(elem=><BoxSkill key={hardSkill.indexOf(elem)} texto={elem.nombre} nivel={elem.nivel}/>)}
            </SkillsStyled>
            <SkillsStyled>
                <SubTitulo texto="Soft Skills"/>
                {softSkill.map(elem=><BoxSkill key={softSkill.indexOf(elem)} texto={elem.nombre}/>)}
            </SkillsStyled>
        </>
    )
}

export default Skills

const SkillsStyled=styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
