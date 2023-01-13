import CourseItem from "./CourseItem"
import styled from "styled-components"
import Loading from "./Loading"

const CourseCard = ({datos}) =>{

    return (
        <CourseCardStyled>
            {datos.length==0
            ?datos.map((e)=>{return(<CourseItem datos={e} key={e.id}/>)})
            :<Loading/>
        }
        </CourseCardStyled>
    )
}

export default CourseCard

const CourseCardStyled=styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
