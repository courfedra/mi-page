import styled from "styled-components"
import {useContext} from "react"
import {ColorContext} from "../context/ColorContext"
import Themes from "./Themes"

const Botones = () => {
    const {cambioColor,colorBg,colorLineaBorde}=useContext(ColorContext)

    const BotoneraContainer = styled.div`
        top: 0;
        background-color: ${colorBg};
        padding: 10px;
        border-radius: 15px;
        border: 1px solid ${colorLineaBorde};
        display: flex;
        align-items: center;
        justify-content: center;

    `

    const BotonWhite = styled.button`
        width: 30px;
        height:30px;
        border-radius: 100%;
        margin: 5px;
        background: radial-gradient(#fca311,#f5f5f5, #e5e5e5, #14213d, #101010);
        transition: all .25s ease-in-out;
        &:hover{
            transform:scale(1.2);
        }
    `
    const BotonRed = styled.button`
        width: 30px;
        height:30px;
        border-radius: 100%;
        margin: 5px;
        background: radial-gradient(#a90206,#1a5175, #f4f1c9, #f17c12, #011d41);
        transition: all .25s ease-in-out;
        &:hover{
            transform:scale(1.2);
        }
`
const BotonBlue = styled.button`
        width: 30px;
        height:30px;
        border-radius: 100%;
        margin: 5px;
        background: radial-gradient(#f6bf44,#4a88f7, #eb356f, #7844e3, #e9612c);
        transition: all .25s ease-in-out;
        &:hover{
            transform:scale(1.2);
        }
    `
    const BotonGreen = styled.button`
        width: 30px;
        height:30px;
        border-radius: 100%;
        margin: 5px;
        background: radial-gradient(#042940,#d6d58e, #dbf227, #005c53, #9fc131);
        transition: all .25s ease-in-out;
        &:hover{
            transform:scale(1.2);
        }
`

    return(
            <BotoneraContainer>
                <BotonWhite onClick={()=>{cambioColor(Themes.white)}}></BotonWhite>
                <BotonRed onClick={()=>{cambioColor(Themes.red)}}></BotonRed>
                <BotonBlue onClick={()=>{cambioColor(Themes.blue)}}></BotonBlue>
                <BotonGreen onClick={()=>{cambioColor(Themes.green)}}></BotonGreen> 
            </BotoneraContainer>
    )
}
export default Botones