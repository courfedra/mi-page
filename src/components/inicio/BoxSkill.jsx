import styled from "styled-components"
import Theme from "../Themes"

const BoxSkill=({texto})=>{ 
    return(
        <SkillInfo>
            <h6>{texto}</h6>
        </SkillInfo>
    )
}
export default BoxSkill


const SkillInfo=styled.div`
    width: 20%;
    padding: 5px;
    margin: 5px 0;
    border-radius: 10px;
    color: ${Theme.colorEnlace};
    background-color: ${Theme.colorBg};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover{
        background-color: ${Theme.colorBgHover};
        color: ${Theme.colorEnlaceHover};
        box-shadow: 0 0 5px 5px ${Theme.colorLineaBorde};
    }
    
`