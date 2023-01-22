import NumberCard from "./NumberCard"
import Theme from "../Themes"
import styled from "styled-components"

const CardPerfil = ({datos,posicion,totalPag,array}) => {
    return(
        <CardPerfilStyled>
            <CardStyled>
                <ImgCard src={datos.img} alt={datos.altImg}/>
                <CardInfoStyled>
                    <h2>{datos.titulo}</h2>

                    <p>{datos.parrafoPrimero}</p>

                    <p>{datos.parrafoSegundoInicio}<span>{datos.parrafoSpan}</span>{datos.parrafoSegundoFinal}</p>

                </CardInfoStyled>
            </CardStyled>
            <NumberCard posicion={posicion} totalPag={totalPag} array={array}/>
        </CardPerfilStyled>
    )
}

export default CardPerfil

const CardPerfilStyled=styled.div`
    width: 100%;
    margin: 5px;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:900px) {
        margin-top:15%;
    }
`
const CardStyled=styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction:row;
        width: 75%;
        min-height: 50vh;
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

const ImgCard=styled.img`
    width: 100px;
    height: 100px;
    margin: 5px;
    border-radius: 100%;
    border: 2.5px solid ${Theme.colorLineaBorde};
    transition: all .25s ease-in-out;
`

const CardInfoStyled=styled.div`
    transition: all .25s ease-in-out;
    padding: 10px;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    color:${Theme.colorTxt};
    span{color: ${Theme.colorTitulo};}
`
