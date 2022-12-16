const ProyectCard = ({datos})=>{
    return(
        <div className="proyectCard">
            <h1>{datos.nombre}</h1>
            <h2>{datos.sector}</h2>
            <h3>{datos.link}</h3>
            <h4>{datos.foto}</h4>
        </div>
    )
}
export default ProyectCard