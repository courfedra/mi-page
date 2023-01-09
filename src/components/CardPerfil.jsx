import NumberCard from "../components/NumberCard"
import Theme from "./Themes"
import styled from "styled-components"

const CardPerfilStyled=styled.div`
    width: 100%;
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
    padding: 5px;
    text-align: center;
    border: 2px groove ${Theme.colorLineaBorde};
    transition: all .25s ease-in-out;
`

const ImgCard=styled.img`
    width: 100px;
    height: 100px;
    margin: 5px;
    border-radius: 100%;
    outline: 2.5px solid ${Theme.colorLineaBorde};
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
    span{color: ${Theme.colorTitulo};}
`

const CardPerfil = ({datos,posicion,totalPag,array}) => {
    return(
        <CardPerfilStyled>
            <CardStyled>
                <ImgCard src={datos.img} alt={datos.altImg}/>
                <CardInfoStyled>
                    <h2>{datos.titulo}</h2>

                    <p>{datos.parrafoPrimero}</p>

                    <p>{datos.parrafoSegundoInicio}<span>{datos.parrafoSpan}</span>{datos.parrafoSegundoFinal}</p>

                    <p>{datos.parrafoTercero}</p>
                    
                    <p>{datos.parrafoCuarto}</p>
                </CardInfoStyled>
            </CardStyled>
            <NumberCard posicion={posicion} totalPag={totalPag} array={array}/>
        </CardPerfilStyled>
    )
}

export default CardPerfil