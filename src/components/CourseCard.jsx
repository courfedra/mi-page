import {Link} from "react-router-dom"
const CourseCard = ({datos}) =>{
    return(
        <div className="courseCard">
            <h2>{datos.curso}</h2>
            <p>{datos.academia}</p>
            <div className="linksDetail">
                <Link to={`/cursos/${datos.categoria}`}><button className="btnCardDetail">Entrar</button></Link>
                <a target="_blank" className="aCardDetail" href={datos.certificado}>Certificado</a>
            </div>
        </div>
    )
}
export default CourseCard