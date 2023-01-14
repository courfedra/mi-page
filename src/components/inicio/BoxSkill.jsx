import styled from "styled-components"
import Theme from "../Themes"

const BoxSkill=({texto})=>{  
    return(
        <SkillInfo>
            <p>{texto}</p>
            
        </SkillInfo>
    )
}
export default BoxSkill

const SkillInfo=styled.div`
    width: 100%;
    margin: 2.5px;
    border-radius: 10px;
    color: ${Theme.colorEnlace};
    background-color: ${Theme.colorBg};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p{
        padding:0 5px;
        width: 100px;
    }
    
`