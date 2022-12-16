const ProyectCard = ({datos})=>{
    return(
        <div className="proyectCard">
            <div className="proyectCardImg">
                <img src={datos.foto}/>
            </div>
            <div className="proyectCardInfo">
                <p>{datos.nombre}</p>
                <p>{datos.sector}</p>
                <p>{datos.linkRepo}</p>
                <p>{datos.linkPage}</p>
                <p>{datos.descripcion}</p>
            </div>
            
        </div>
    )
}
export default ProyectCard