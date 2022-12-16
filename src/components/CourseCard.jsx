import {Link} from "react-router-dom"
const CourseCard = ({datos}) =>{
    return(
        <div className="courseCard">
            <h2>{datos.curso}</h2>
            <p>{datos.nota}</p>
            <p>{datos.profesor}</p>
            <p>{datos.academia}</p>
            <a target="_blank" className="aCardDetail" href={datos.certificado}>Certificado</a>
            <Link to={`/course/${datos.categoria}`}><button className="btnCardDetail">Ver Más</button></Link>
        </div>
    )
}
export default CourseCard