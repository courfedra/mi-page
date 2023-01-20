import styled from "styled-components"
import BoxSkill from "./BoxSkill"
import SubTitulo from "../SubTitulo"
import { hardSkill,softSkill } from "../../data/skills"
import Theme from "../Themes"

const Skills =()=>{
    return(
        <>
            <SubTitulo 
                id="skills"
                color={Theme.colorBg}
                titulo="Skills"
                texto="Dejo a tu disposición las tecnologías que he aprendido hasta el momento"
            />
            <SkillsStyled>
                {hardSkill.map(elem=><BoxSkill key={hardSkill.indexOf(elem)} texto={elem.nombre}/>)}
                {softSkill.map(elem=><BoxSkill key={softSkill.indexOf(elem)} texto={elem.nombre}/>)}
            </SkillsStyled>
        </>
    )
}

export default Skills

const SkillsStyled=styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 10px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBg};
`
