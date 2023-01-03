import CourseCard from "../components/CourseCard"
import {dataCourse as data} from "../data/dataCourse"
import styled from "styled-components"
const Course=()=>{
    const CourseStyled = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px; 
    `


    return(
        <CourseStyled>
        {
            data.map((e)=>{return(<CourseCard datos={e} key={e.id}/>)})
        }    
        </CourseStyled>
    )
}
export default Course