import styled from "styled-components"
import Theme from "../Themes"

const BoxSkill=({texto,nivel})=>{ 
    return(
        <SkillInfo>
            <p>{texto}</p>
            {nivel&& <div className="barraPorcentaje" style={{width: nivel+"%"}}>{nivel+"%"}</div>}
        </SkillInfo>
    )
}
export default BoxSkill


const SkillInfo=styled.div`
    width: 50%;
    height: 75px;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    color: ${Theme.colorEnlace};
    background-color: ${Theme.colorBg};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    position: relative;
    p{
        letter-spacing: 1.5px;
        margin: 5px 0;
        position: absolute;
        top: 0;
    }
    .barraPorcentaje{
        background-color: ${Theme.colorBgHover};
        color: ${Theme.colorEnlace};
        height: 100%;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 10px;
        animation: barraAnimada 3s ease-in-out 1s infinite alternate;
    }
    @keyframes barraAnimada {
        100%{
            border: 2px solid ${Theme.colorTitulo};
            position: absolute;
            bottom: 0;
            width: 99%;
            height: 25%;

        }
        0%{
            border: 1px solid ${Theme.colorEnlace};
            position: absolute;
            bottom:0;
            height: 25%;
        }
    }
`