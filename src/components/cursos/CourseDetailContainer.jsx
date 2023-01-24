import { doc, getDoc } from "firebase/firestore";
import {db} from "../../data/firebaseConfig"
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import CourseDetail from "./CourseDetail"
import styled from "styled-components"


const CourseDetailContainer = () => {

    const [datos,setDatos]=useState([])
    const {idCurso}=useParams();

    useEffect(()=>{
        //Funcion que deberia estar en otro archivo para modularizar y mejor practica
        const dbOneAsync= async()=>{
            //eleccion de item por ID
            let q=doc(db,"cursos", idCurso)
            const docSnap = await getDoc(q);

            if(docSnap.exists()){
                return{
                    id:idCurso,
                    ...docSnap.data()
                }
            }else{
                console.log("No se encontro el curso")
            }
        }

        dbOneAsync()
            .then(result=>setDatos(result))
            .catch(err=>console.log(err))
    },[]);

    return(
        <CourseDetailStyled>
            <CourseDetail datos={datos}/>
        </CourseDetailStyled>
    )
}
export default CourseDetailContainer

const CourseDetailStyled=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`