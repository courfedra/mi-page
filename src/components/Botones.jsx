import styled from "styled-components"
import Boton from "./Boton"
import {useContext} from "react"
import {ColorContext} from "../context/ColorContext"
import Themes from "./Themes"

const Botones = () => {
    //llevar a contexto
    const {cambioColor}=useContext(ColorContext)
    const {colorBg,colorTxt,colorTitulo}=useContext(ColorContext)
    const NavbarBotonera = styled.div`
        display: flex;
        margin: 5px;
        background-color: #f5f5f5;
    `
    const Boton2 = styled.button`
        color:${colorTitulo};
        width: 100px;
        padding: 5px;
        margin: 5px;
        background-color: ${colorBg};
        border-bottom: 1px solid ${colorTxt};
        border-top: 1px solid ${colorTxt};
    `
    return(
        <NavbarBotonera>
            <Boton2 onClick={()=>{cambioColor(Themes.red)}}>Rojo</Boton2>
            <Boton2 onClick={()=>{cambioColor(Themes.blue)}}>Azul</Boton2>
            <Boton2 onClick={()=>{cambioColor(Themes.green)}}>Verde</Boton2>
            <Boton2 onClick={()=>{cambioColor(Themes.white)}}>Blanco</Boton2>
            
        </NavbarBotonera>
    )
}
export default Botones