import styled from "styled-components"
import Theme from "../Themes"

const BoxSkill=({texto,nivel})=>{ 
    return(
        <SkillInfo>
            <p>
                {texto}
            </p>
            <div className="barraPorcentaje" style={{
                width: nivel + '%',
                color:Theme.colorEnlace,
                backgroundColor:Theme.colorLineaBorde,
                borderRadius:15
            }}>
                {nivel?nivel+"%":""}
            </div>
        </SkillInfo>
    )
}
export default BoxSkill


const SkillInfo=styled.div`
    width: 50%;
    padding: 5px;
    margin: 10px 0;
    border-radius: 10px;
    color: ${Theme.colorEnlace};
    background-color: ${Theme.colorBg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
        letter-spacing: 1.5px;
    }
    &:hover{
        background-color: ${Theme.colorBgHover};
        color: ${Theme.colorEnlaceHover};
        box-shadow: 0 0 5px 5px ${Theme.colorLineaBorde};
    }
    &:hover .barraPorcentaje{
        animation: barraAnimada 2s ease-in-out infinite alternate !important;
    }
    @keyframes barraAnimada {
        100%{
            background-color: ${Theme.colorEnlace};
            color:${Theme.colorTxt}
        }
    }
`