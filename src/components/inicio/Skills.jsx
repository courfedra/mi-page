import styled from "styled-components"
import { Link } from "react-router-dom"
import BoxSkill from "./BoxSkill"
import SubTitulo from "../SubTitulo"
import Loading from "../Loading"
import Theme from "../Themes"
import {db} from "../../data/firebaseConfig"
import { collection, getDocs,query} from "firebase/firestore"; 
import { useState,useEffect } from "react"

const Skills =()=>{

const [datos,setDatos] = useState([]);

    useEffect(()=>{
        const dbAsync= async()=>{
            //para cambiar categorias
            let q=query(collection(db, "skills"))
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
        <>
            <SubTitulo 
                id="skillsCore"
                titulo="Habilidades Centrales"
                texto="Dejo a tu disposición las tecnologías centrales que he aprendido hasta el momento"
            />
            <SkillsStyled>
                {datos.length!==0
                    ?datos[0].hardSkill.map(elem=><BoxSkill key={datos[0].hardSkill.indexOf(elem)} texto={elem}/>)
                    :<Loading/>
                }
            </SkillsStyled>

            <SubTitulo 
                id="skillsPasive"
                heigth="auto"
                titulo="Otras Habilidades"
                texto="Otras habilidades que he incorporado para mejorar la experiencia al momento de desarrollar"
            />
            <SkillsStyled >
                {datos.length!==0
                    ?datos[0].librarySkill.map(elem=><BoxSkill key={datos[0].librarySkill.indexOf(elem)} texto={elem}/>)
                    :<Loading/>
                }
            </SkillsStyled>

            <SubTitulo 
                id="softSkills"
                heigth="auto"
                titulo="Habilidades Personales"
                texto="Habilidades que la experiencia en diferentes situaciones y/o trabajos me enseñaron"
            />
            <SkillsStyled >
                <Link to="/perfil">
                    <BoxSkill texto="¡Visita mi perfil!"/>
                </Link>
            </SkillsStyled>
        </>
    )
}

export default Skills

const SkillsStyled=styled.div`
    width: 100%;
    min-height: 50vh;
    padding: 10px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBg};
    a{text-decoration:none}
`
