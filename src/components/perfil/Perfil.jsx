import CardPerfil from "./CardPerfil"
import {dataPerfil as data} from "../../data/dataPerfil"
import {useState} from "react"
import styled from "styled-components"
import Theme from "../Themes"

const PerfilStyled=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
`

const BotonCardPerfilStyled=styled.button`
    padding: 10px;
    margin: 5px;
    background-color: ${Theme.colorBg};
    color: ${Theme.colorEnlace};
    border: none;
    border-radius: 15px;
    letter-spacing: 1.5px;
    transition: all .25s ease-in-out;
    &:hover{
        color: ${Theme.colorEnlaceHover};
        background-color: ${Theme.colorBgHover};
    }
`

const Perfil = ()=>{
    const [page,setPage] = useState(0)

    const cambioCard=()=>{
        page<(data.length-1)
        ?setPage(page+1)
        :setPage(page-(data.length-1))
    }
    return(
        <PerfilStyled>
            <CardPerfil datos={data[page]} posicion={page+1} totalPag={data.length} array={data}/>
            <BotonCardPerfilStyled onClick={cambioCard}>
                ¡Quiero Conocerte más!
            </BotonCardPerfilStyled>
        </PerfilStyled>
    )
}
export default Perfil