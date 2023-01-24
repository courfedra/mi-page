import ProyectCard from "./ProyectCard"
import Theme from "../Themes"
import SubTitulo from "../SubTitulo"
import { useState,useEffect } from "react"
import styled from "styled-components"
import {db} from "../../data/firebaseConfig"
import { collection, getDocs,query,orderBy } from "firebase/firestore"; 


const Proyects = ()=>{

    const [datos,setDatos] = useState([]);
    
    useEffect(()=>{
        const dbAsync= async()=>{
            //para cambiar categorias
            let q=query(collection(db, "proyectos"),orderBy("orden"))
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
    console.log(datos)
    return(
        <ProyectStyled>
            <SubTitulo 
                key="1"
                heigth="100vh"
                titulo="Proyectos"
                texto="Alguno de los proyectos que he realizado y continuo aprendiendo"
            />
            <ProyectCard datos={datos}/>
        </ProyectStyled>
    )
}

export default Proyects


const ProyectStyled=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBg};
`