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
                    titulo="Cursos" 
                    texto="Alguno de los cursos que he relaizado y continuo aprendiendo"
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
    margin-top: 10%;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and (max-width:900px){
        margin-top: 20%;
    }
`
