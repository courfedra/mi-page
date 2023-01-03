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
                color: ${colorTxt};
                display: flex;
                transition: all .1s ease-in-out;
                span{
                    color: ${colorTitulo};
                    padding: 0 15px;
                    letter-spacing: 1.5px;
                }
            }
            h2{
                letter-spacing: 1.2px;
                color: ${colorTxt};
            }
    `
    const BtnInfo = styled.button`
        padding: 5px 10px;
        border-radius: 5px;
        letter-spacing: 2px;
        color: ${colorEnlace};
        background-color: ${colorBg};
        border: 1px solid ${colorLineaBorde};
        transition: all .2s ease-in-out;
        &:hover{
            border: 2px solid ${colorLineaBorde};
            color: ${colorEnlaceHover};
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