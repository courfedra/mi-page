import {useParams} from "react-router-dom"
//cambiar por BD
import {dataCourse as data} from "../../data/dataCourse"
import CourseDetail from "./CourseDetail"
import {useState,useEffect} from "react"
import styled from "styled-components"


const CourseDetailContainer = () => {
    
    const {idCategory}=useParams()
    const [datos,setDatos]=useState([])
    
    useEffect(()=>{
       setDatos(data.find(item=>item.categoria==idCategory))
    },[])

    return(
        <CourseDetailStyled>
            <CourseDetail datos={datos}/>
        </CourseDetailStyled>
    )
}
export default CourseDetailContainer

const CourseDetailStyled=styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
`