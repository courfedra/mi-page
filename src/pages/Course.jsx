import CourseCard from "../components/CourseCard"
import {dataCourse as data} from "../data/dataCourse"
import styled from "styled-components"

const CourseStyled = styled.div`
width: 100%;
min-height: 100vh;
margin: 20px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px; 
`

const Course=()=>{

return(
    <CourseStyled>
    {
        data.map((e)=>{return(<CourseCard datos={e} key={e.id}/>)})
    }    
    </CourseStyled>
    )
}
export default Course