import {Link} from "react-router-dom"
const CourseDetail = ({datos})=>{
    return(
        <div className="courseDetail">
            <h1>{datos.curso}</h1>
            <h1>{datos.curso}</h1>
            <Link to="/cursos"><button className="btnBack">Volver</button></Link>
        </div>

    )
}
export default CourseDetail