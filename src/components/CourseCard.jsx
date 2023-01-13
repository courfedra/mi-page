import CourseItem from "./CourseItem"
import styled from "styled-components"
import Loading from "./Loading"

const CourseCard = ({datos}) =>{

    return (
        <CourseItemStyled>
            {datos.length!==0
            ?datos.map((e)=>{return(<CourseItem datos={e} key={e.id}/>)})
            :<Loading/>
        }
        </CourseItemStyled>
    )
}

export default CourseCard

const CourseItemStyled=styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
