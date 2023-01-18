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
    width: 150px;
    height: 50px;
    margin: 5px;
    border-radius: 10px;
    color: ${Theme.colorEnlace};
    background-color: ${Theme.colorBg};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
        letter-spacing: 1.5px;
        margin: 5px 0;
    }
`