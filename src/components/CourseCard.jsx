import {Link} from "react-router-dom"
const CourseCard = ({datos}) =>{
    return(
        <div className="courseCard">
            <h2>{datos.curso}</h2>
            <p>{datos.nota}</p>
            <p>{datos.profesor}</p>
            <p>{datos.academia}</p>
            <a target="_blank" href={datos.certificado}>Certificado</a>
            <Link className="LinkCardDetail" to="">Ver Más</Link>
        </div>
    )
}
export default CourseCard