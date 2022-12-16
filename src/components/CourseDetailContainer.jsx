import {useParams} from "react-router-dom"
import {dataCourse as data} from "../data/dataCourse"
import CourseDetail from "./CourseDetail"
import {useState,useEffect} from "react"

const CourseDetailContainer = () => {
    
    const {idCategory}=useParams()
    const [datos,setDatos]=useState([])
    
    useEffect(()=>{
       setDatos(data.find(item=>item.categoria==idCategory))
    },[])
    return(
        <CourseDetail datos={datos}/>
    )
}
export default CourseDetailContainer