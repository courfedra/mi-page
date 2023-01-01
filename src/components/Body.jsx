import {ColorContext} from "../context/ColorContext"
import { useContext } from "react"
import styled from "styled-components"
const Body = ()=>{
    const {colorBg,colorTxt,colorTitulo,colorLineaBorde,colorEnlace,colorEnlaceHover}=useContext(ColorContext)

    const Inicio = styled.main`
        width: 100%;
        min-height: 70vh;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    const CardInfo = styled.div`
        width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            h1{
                color: ${colorTitulo};
                display: flex;
                transition: all .1s ease-in-out;
                span{
                    color: ${colorTxt};
                    padding: 0 15px;
                    letter-spacing: 1.5px;
                    filter: drop-shadow(0 0 7.5px ${colorBg});
                }
            }
            h2{
                letter-spacing: 1.2px;
            }
    `
    const BtnInfo = styled.button`
        padding: 5px 10px;
        border-radius: 5px;
        letter-spacing: 2px;
        color: ${colorTxt};
        background-color: ${colorBg};
        border: none;
        transition: all .2s ease-in-out;
        &:hover{
            outline: 2px solid ${colorLineaBorde};
        }
    `

    return(
        <Inicio>
            <CardInfo>
                <h1>Hola, soy<span>Francisco Andres</span></h1>
                <h2>Frontend Developer</h2>
                <BtnInfo>Descargar CV</BtnInfo>
            </CardInfo>   
                    
        </Inicio>
    )
}

export default Body