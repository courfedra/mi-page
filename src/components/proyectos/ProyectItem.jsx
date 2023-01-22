import styled from "styled-components"
import Theme from "../Themes"


const ProyectItem=({datos})=>{
    return(
        <ProyectItemStyled>
            <ProyectCardImgStyled>
                <img src={datos.foto}/>
            </ProyectCardImgStyled>
            <ProyectCardInfoStyled>
                <NameAndTecnology>
                    <h3>Nombre del proyecto: <span>{datos.nombre}</span></h3>
                    <h3>Tecnología predominante: <span>{datos.sector}</span></h3>
                </NameAndTecnology>
                <a className="aButton" target="_blank" href={datos.linkRepo}>Link al repositorio</a>
                <a className="aButton" target="_blank" href={datos.linkPage}>Link al sitio web</a>
                <p>{datos.descripcion}</p>
            </ProyectCardInfoStyled>
        </ProyectItemStyled>
    )
}

export default ProyectItem

const ProyectItemStyled=styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: 20px 0;
    width: 100%;
    justify-content: center;
    border-radius: 5px;
    border: 2px solid ${Theme.colorLineaBorde};
    background-color: ${Theme.colorBg};
    @media screen and (max-width:900px){
        flex-wrap: wrap;
    }

`

const ProyectCardImgStyled=styled.div`
    width: 50%;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 2.5px;
    img{
        width: 100%;
        border-radius: 10px;
    }
`
const ProyectCardInfoStyled=styled.div`
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 5px;
        padding: 5px;
        .aButton{
            text-align: center;
            width: 80%;
            padding: 5px;
            margin: 5px;
            border-radius: 25px;
            color: ${Theme.colorEnlace};
            background-color: ${Theme.colorBg};
            text-decoration: none;
            border: 1px solid ${Theme.colorLineaBorde};
            &:hover{
                color: ${Theme.colorEnlaceHover};
                background-color: ${Theme.colorBgHover};
            }
        }
        
        
`

const NameAndTecnology=styled.div`
    h3{
        color: ${Theme.colorTitulo};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2.5px;
    }
    span{
        color: ${Theme.colorTxt};
        padding: 2.5px;
    }
        
`
