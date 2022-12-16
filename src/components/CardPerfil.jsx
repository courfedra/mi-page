import NumberCard from "../components/NumberCard"
const CardPerfil = ({datos,posicion,totalPag,array}) => {
    return(
        <div className="cardPerfil">
            <div className="card">
                <img src="https://i.ibb.co/QKgRsTj/FAnoBG.png" alt="fotoCarnet"/>
                <div className="cardInfo">
                    <h2>{datos.titulo}</h2>

                    <p>{datos.parrafoPrimero}</p>

                    <p>{datos.parrafoSegundoInicio}<span>{datos.parrafoSpan}</span>{datos.parrafoSegundoFinal}</p>

                    <p>{datos.parrafoTercero}</p>
                    
                    <p>{datos.parrafoCuarto}</p>
                </div>
            </div>
            <NumberCard posicion={posicion} totalPag={totalPag} array={array}/>
        </div>
    )
}

export default CardPerfil