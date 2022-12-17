const ProyectCard = ({datos})=>{
    return(
        <div className="proyectCard">
            <div className="proyectCardImg">
                <img src={datos.foto}/>
            </div>
            <div className="proyectCardInfo">
                <h3>{datos.nombre}</h3>
                <h5>{datos.sector}</h5>
                <a target="_blank" href={datos.linkRepo}>Link al repositorio</a>
                <a target="_blank" href={datos.linkPage}>Link al sitio web</a>
                <p>{datos.descripcion}</p>
            </div>
            
        </div>
    )
}
export default ProyectCard