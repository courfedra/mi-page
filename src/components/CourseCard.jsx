import {Link} from "react-router-dom"
const CourseCard = ({datos}) =>{
    return(
        <div className="courseCard">
            <h2>{datos.curso}</h2>
            <p>{datos.academia}</p>
            <Link to={`/course/${datos.categoria}`}><button className="btnCardDetail">Ver Más</button></Link>
            <a target="_blank" className="aCardDetail" href={datos.certificado}>Certificado</a>
        </div>
    )
}
export default CourseCard