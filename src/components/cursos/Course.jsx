import CourseCard from './CourseCard'
import Theme from '../Themes'
import styled from "styled-components"
import { useState,useEffect } from "react"
import {db} from "../../data/firebaseConfig"
import { collection, getDocs,query,orderBy } from "firebase/firestore"; 

const Course=()=>{
    
    const [datos,setDatos] = useState([]);

    useEffect(()=>{
        const dbAsync= async()=>{
            //para cambiar categorias
            let q=query(collection(db, "cursos"),orderBy("orden"))
            const querySnapshot = await getDocs(q);
            //metodo "docs" convierte array de documentos a array de objetos
            const dataFromFirestone = querySnapshot.docs.map(item=>({
                id:item.id,
                ...item.data()
            }))
            return dataFromFirestone;
        }

        dbAsync()
            .then(result=>setDatos(result))
            .catch(err=>console.log(err))
    },[]);

return(
    <CourseStyled>
        <CourseCard datos={datos}/>   
    </CourseStyled>
    )
}

export default Course
    
    
const CourseStyled = styled.div`
    width: 100%;
    min-height:50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px; 
    background-color:${Theme.colorBg}
`