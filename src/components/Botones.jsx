import styled from "styled-components"
import Boton from "./Boton"
import {useState} from "react"
const Botones = () => {
    //llevar a contexto
    const [color, setColor]=useState("black")
    const NavbarBotonera = styled.div`
        display: flex;
        margin: 5px;
    `
    const Boton = styled.button`
        color:black;
        width: 100px;
        padding: 5px;
        margin: 5px;
        background-color: ${color};
    `
    return(
        <NavbarBotonera className="navbarBotonera">
            <Boton onClick={()=>setColor("green")}>Verde</Boton>
            <Boton onClick={()=>setColor("red")}>Rojo</Boton>
            <Boton onClick={()=>setColor("blue")}>Azul</Boton>
        </NavbarBotonera>
    )
}
export default Botones