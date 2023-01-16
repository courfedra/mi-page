import styled from "styled-components"
import BoxSkill from "./BoxSkill"
import SubTitulo from "../SubTitulo"
import { hardSkill,softSkill } from "../../data/skills"

const Skills =()=>{
    return(
        <>
            <SkillsStyled>
                <SubTitulo id="hardskill" texto="Hard Skills"/>
                {hardSkill.map(elem=><BoxSkill key={hardSkill.indexOf(elem)} texto={elem.nombre} nivel={elem.nivel}/>)}
            </SkillsStyled>
            <SkillsStyled>
                <SubTitulo id="softskill" texto="Soft Skills"/>
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
    background-image: url("https://i.ibb.co/rktR4Zt/vecteezy-watercolour-nature-design-with-hand-painted-leaves-9201325.jpg");
    background-size: cover;
    background-position: center;
    
`
