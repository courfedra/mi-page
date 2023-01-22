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
    width: 175px;
    height: 75px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    color: ${Theme.colorTxt};
    background-color: ${Theme.colorBg};
    border: 1px solid ${Theme.colorLineaBorde};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
        letter-spacing: 1.5px;
        margin: 5px 0;
    }
    transition: all .25s ease-in-out;
    &:hover{
        color:${Theme.colorTitulo};
        background-color: ${Theme.colorBgHover};
    }
`