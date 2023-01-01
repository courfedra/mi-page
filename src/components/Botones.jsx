import styled from "styled-components"
import {useContext} from "react"
import {ColorContext} from "../context/ColorContext"
import Themes from "./Themes"

const Botones = () => {
    //llevar a contexto
    const {cambioColor}=useContext(ColorContext)
    
    const NavbarBotonera = styled.div`
        display: flex;
        margin: 5px;
        background-color: transparent;
    `
    const BotonWhite = styled.button`
        width: 30px;
        height:30px;
        border-radius: 100%;
        margin: 5px;
        background-color: #f5f5f5;
        &:hover{
        background-color: #cccacaaa;
    }
    `
    const BotonRed = styled.button`
    width: 30px;
    height:30px;
    border-radius: 100%;
    margin: 5px;
    background-color: #f90000;
    &:hover{
        background-color: #f90000aa;
    }
`
const BotonBlue = styled.button`
        width: 30px;
        height:30px;
        border-radius: 100%;
        margin: 5px;
        background-color: #337aff;
        &:hover{
        background-color: #337affaa;
    }
    `
    const BotonGreen = styled.button`
    width: 30px;
    height:30px;
    border-radius: 100%;
    margin: 5px;
    background-color: #5ef666;
    &:hover{
        background-color: #5ef666aa;
    }
`
    return(
        <NavbarBotonera>
            <BotonWhite onClick={()=>{cambioColor(Themes.white)}}></BotonWhite>
            <BotonRed onClick={()=>{cambioColor(Themes.red)}}></BotonRed>
            <BotonBlue onClick={()=>{cambioColor(Themes.blue)}}></BotonBlue>
            <BotonGreen onClick={()=>{cambioColor(Themes.green)}}></BotonGreen> 
        </NavbarBotonera>
    )
}
export default Botones