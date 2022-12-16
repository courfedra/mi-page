import CourseCard from "../components/CourseCard"
import {dataCourse as data} from "../data/dataCourse"
const Course=()=>{
    return(
        <div className="course">
            {
                data.map((e)=>{return(<CourseCard datos={e} key={e.id}/>)
                })
            }
            
        </div>
    )
}
export default Course