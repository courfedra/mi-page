import styled from "styled-components"
import Theme from "../Themes"
import BoxSkill from "./BoxSkill"
import SubTitulo from "../SubTitulo"

const hardSkill=["HTML","CSS","JS"]
const softSkill=["bueno","malo"]


const Skills =()=>{
    return(
        <>
            <HardSkillsStyled>
                <SubTitulo texto="Hard Skills"/>
                <BoxSkillStyled>
                    {hardSkill.map(elem=><BoxSkill key={hardSkill.indexOf(elem)} texto={elem}/>)}
                </BoxSkillStyled>
            </HardSkillsStyled>
            <SoftSkillsStyled>
                <SubTitulo texto="Soft Skills"/>
                <BoxSkillStyled>
                    {softSkill.map(elem=><BoxSkill key={softSkill.indexOf(elem)} texto={elem}/>)}
                </BoxSkillStyled>
            </SoftSkillsStyled>
        </>
    )
}

export default Skills

const HardSkillsStyled=styled.div`
    width: 100%;
    padding: 10px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBgHover};
`
const SoftSkillsStyled=styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBgHover};
`

const BoxSkillStyled=styled.div`
    width: 80%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`