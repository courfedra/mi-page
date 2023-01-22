import CardPerfil from "./CardPerfil"
import SubTitulo from "../SubTitulo"
import {dataPerfil as data} from "../../data/dataPerfil"
import {useState} from "react"
import styled from "styled-components"
import Theme from "../Themes"

const Perfil = ()=>{
    const [page,setPage] = useState(0)

    const cambioCard=()=>{
        page<(data.length-1)
        ?setPage(page+1)
        :setPage(page-(data.length-1))
    }
    return(
        <PerfilStyled>
            <div className="boxPerfil">
                <SubTitulo 
                    key="1" 
                    titulo="¡Este soy yo!" 
                    texto="Te cuento mis gustos, experiencias y habilidades aprendidas en este recorrido"
                />
                <CardPerfil datos={data[page]} posicion={page+1} totalPag={data.length} array={data}/>
            </div>
                <BotonCardPerfilStyled onClick={cambioCard}>
                    ¡Quiero Conocerte más!
                </BotonCardPerfilStyled>
        </PerfilStyled>
    )
}
export default Perfil

const PerfilStyled=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${Theme.colorBg};
    .boxPerfil{
        margin-top:10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width:900px){
            margin-top:15%;
        }
    }
`

const BotonCardPerfilStyled=styled.button`
    padding: 10px;
    margin: 5px;
    background-color: ${Theme.colorBg};
    color: ${Theme.colorEnlace};
    border: none;
    border: 1px solid ${Theme.colorLineaBorde};
    border-radius: 15px;
    letter-spacing: 1.5px;
    transition: all .25s ease-in-out;
    &:hover{
        color: ${Theme.colorEnlaceHover};
        background-color: ${Theme.colorBgHover};
    }
`
