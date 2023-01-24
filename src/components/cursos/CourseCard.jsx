import CourseItem from "./CourseItem"
import styled from "styled-components"
import Loading from "../Loading"
import SubTitulo from "../SubTitulo"

const CourseCard = ({datos}) =>{

    return (
        <>
            <CourseCardStyled>
                <SubTitulo 
                    key="1"
                    heigth="100vh"
                    titulo="Cursos" 
                    texto="Alguno de los cursos que he realizado y continuo aprendiendo"
                />
                {datos.length!==0
                ?datos.map((e)=>{return(<CourseItem datos={e} key={e.id}/>)})
                :<Loading/>
                }
            </CourseCardStyled>
        </>
    )
}

export default CourseCard

const CourseCardStyled=styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
