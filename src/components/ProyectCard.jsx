const ProyectCard = ({datos})=>{
    return(
        <div className="proyectCard">
            <div className="proyectCardImg">
                <img src={datos.foto}/>
            </div>
            <div className="proyectCardInfo">
                <h3>Nombre del proyecto: <span>{datos.nombre}</span></h3>
                <h5>Tecnología predominante: <span>{datos.sector}</span></h5>
                <a target="_blank" href={datos.linkRepo}>Link al repositorio</a>
                <a target="_blank" href={datos.linkPage}>Link al sitio web</a>
                <p>{datos.descripcion}</p>
            </div>
            
        </div>
    )
}
export default ProyectCard