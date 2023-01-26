import NumberCard from "./NumberCard"
import Theme from "../Themes"
import styled from "styled-components"

const CardPerfil = ({posicion,totalPag,array}) => {

    

    return(
        <CardPerfilStyled>
            <CardStyled >
                <SoftSkillCard onChange={console.log("cambio habilidad")}>{array[posicion].habilidad}</SoftSkillCard>
                <CardInfoStyled onChange={console.log("cambio descripcion")}>
                    <p>{array[posicion].descripcion}</p>
                </CardInfoStyled>
            </CardStyled>
            {<NumberCard posicion={posicion} totalPag={totalPag} array={array}/>}
        </CardPerfilStyled>
    )
}

export default CardPerfil

const CardPerfilStyled=styled.div`
    width: 90%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardStyled=styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction:column;
        width: 80%;
        min-height: 50vh;
        max-height: 70vh;
        padding: 5px;
        text-align: center;
        background-color: ${Theme.colorBg};
        border: 2px solid ${Theme.colorLineaBorde};
        transition: all .25s ease-in-out;
`

const SoftSkillCard=styled.h4`
    padding: 5px;
    color: ${Theme.colorTitulo};
`

const CardInfoStyled=styled.div`
    transition: all .25s ease-in-out;
    padding: 5px;
    width: 85%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    color:${Theme.colorTxt};
    span{color: ${Theme.colorTitulo};}
    @media screen and (max-width:900px){
        font-size: .75rem;
    }
`
