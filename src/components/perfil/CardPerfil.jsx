import NumberCard from "./NumberCard"
import Theme from "../Themes"
import styled from "styled-components"

const CardPerfil = ({posicion,totalPag,array}) => {

    return(
        <CardPerfilStyled>
            <CardStyled>
                <SoftSkillCard>{array[posicion]}</SoftSkillCard>
                <CardInfoStyled>
                    <h1>Hola</h1>
                    <h2>Como estas</h2>
                    <p>Todobien?</p>

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
        flex-direction:row;
        width: 75%;
        min-height: 50vh;
        max-height: 70vh;
        padding: 5px;
        text-align: center;
        background-color: ${Theme.colorBg};
        border: 2px solid ${Theme.colorLineaBorde};
        transition: all .25s ease-in-out;
    @media screen and (max-width:900px) {
        display: flex;
        flex-direction: column;
    }
`

const SoftSkillCard=styled.h4`
    
    color: white;
`

const CardInfoStyled=styled.div`
    transition: all .25s ease-in-out;
    padding: 5px;
    width: 75%;
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
