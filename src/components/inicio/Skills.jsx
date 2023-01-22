import styled from "styled-components"
import { Link } from "react-router-dom"
import BoxSkill from "./BoxSkill"
import SubTitulo from "../SubTitulo"
import { hardSkill,softSkill,librarySkills } from "../../data/skills"
import Theme from "../Themes"

const Skills =()=>{
    return(
        <>
            <SubTitulo 
                id="skillsCore"
                color={Theme.colorLineaBorde}
                titulo="Habilidades Centrales"
                texto="Dejo a tu disposición las tecnologías centrales que he aprendido hasta el momento"
            />
            <SkillsStyled>
                {hardSkill.map(elem=><BoxSkill key={hardSkill.indexOf(elem)} texto={elem.nombre}/>)}
            </SkillsStyled>

            <SubTitulo 
                id="skillsPasive"
                color={Theme.colorLineaBorde}
                titulo="Otras Habilidades"
                texto="Otras habilidades que he incorporado para mejorar la experiencia al momento de desarrollar"
            />
            <SkillsStyled >
                {librarySkills.map(elem=><BoxSkill key={librarySkills.indexOf(elem)} texto={elem.nombre}/>)}
            </SkillsStyled>

            <SubTitulo 
                id="softSkills"
                color={Theme.colorLineaBorde}
                titulo="Habilidades Personales"
                texto="Habilidades que la experiencia en diferentes situaciones y/o trabajos me enseñaron"
            />
            <SkillsStyled >
                <Link to="/perfil">
                    <BoxSkill texto="¡Visita mi perfil!"/>
                </Link>
            </SkillsStyled>
        </>
    )
}

export default Skills

const SkillsStyled=styled.div`
    width: 100%;
    min-height: 50vh;
    padding: 10px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBg};
    a{text-decoration:none}
`
