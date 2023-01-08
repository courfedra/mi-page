import styled from "styled-components"
import Theme from "./Themes"

const ProyectCardStyled=styled.div`
        border: 1px solid ${Theme.colorLineaBorde};
        margin: 5px;
        padding: 5px;
        width: 75%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
`
const ProyectCardImgStyled=styled.div`
    width: 50%;
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
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 5px;
        padding: 2.5px;
        a{
            text-align: center;
            width: 50%;
            padding: 5px;
            margin: 2.5px;
            border-radius: 25px;
            color: ${Theme.colorEnlace};
            text-decoration: none;
            outline: 1px solid ${Theme.colorLineaBorde};
            &:hover{
                color: ${Theme.colorEnlaceHover};
                background-color: ${Theme.colorBg};
            }
        }
        
        
`

const NameAndTecnology=styled.div`
    h3{
        color: ${Theme.colorTxt};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2.5px;
    }
    span{
        color: ${Theme.colorTitulo};
        padding: 2.5px;
    }
        
`

const ProyectCard = ({datos})=>{
    return(
        <ProyectCardStyled>
            <ProyectCardImgStyled>
              <img src={datos.foto}/>
            </ProyectCardImgStyled>
            <ProyectCardInfoStyled>
                <NameAndTecnology>
                    <h3>Nombre del proyecto: <span>{datos.nombre}</span></h3>
                    <h3>Tecnología predominante: <span>{datos.sector}</span></h3>
                </NameAndTecnology>
                <a target="_blank" href={datos.linkRepo}>Link al repositorio</a>
                <a target="_blank" href={datos.linkPage}>Link al sitio web</a>
                <p>{datos.descripcion}</p>
            </ProyectCardInfoStyled>
            
        </ProyectCardStyled>
    )
}
export default ProyectCard