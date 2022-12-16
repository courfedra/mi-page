import {Link} from "react-router-dom"
const CourseDetail = ({datos})=>{
    return(
        <div className="courseDetailItem">
            <h3><span>Curso: </span>{datos.curso}</h3>
            <h4><span>Docente: </span>{datos.profesor}</h4>
            <h4><span>Academia: </span>{datos.academia}</h4>
            <p>{datos.descripcion}</p>
            <Link to="/cursos"><button className="btnBack">Volver</button></Link>
        </div>

    )
}
export default CourseDetail