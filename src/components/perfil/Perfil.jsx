import CardPerfil from "./CardPerfil"
import SubTitulo from "../SubTitulo"
import {dataPerfil as data} from "../../data/dataPerfil"
import {useState,useEffect} from "react"
import {db} from "../../data/firebaseConfig"
import { collection, getDocs,query} from "firebase/firestore";
import styled from "styled-components"
import Theme from "../Themes"
import Loading from "../Loading"

const Perfil = ()=>{

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

    const [page,setPage] = useState(0)
    
    let totalPages=0

    datos.length!==0?totalPages=datos[0].softSkill.length:totalPages=0
    
    const [activoAnterior,setActivoAnterior]=useState("")
    const [activoMas,setActivoMas]=useState("")

    const cambioCardMas=()=>{
        page<(totalPages-1)&&setPage(page+1)
    }

    const cambioCardMenos=()=>{
        page>(0)&&setPage(page-1)
    }

    useEffect(()=>{
        page==(totalPages-1)?setActivoMas("gray"):setActivoMas("")
        page==(0)?setActivoAnterior("gray"):setActivoAnterior("")
    })

    //componente willUnMount
    useEffect(()=>{
        return(()=>{
            setDatos([]);
        })
    },[])

    return(
        <PerfilStyled>
            {datos.length!==0
                ?<>
                    <div className="boxPerfil">
                        <SubTitulo 
                            key="1"
                            heigth="100vh"
                            titulo="¡Este soy yo!" 
                            texto="Te cuento mis gustos, experiencias y habilidades aprendidas en este recorrido"
                        />
                        <CardPerfil posicion={page} totalPag={totalPages} array={datos[0].softSkill}/>
                    </div>
                    <div className="boxButtonPages">
                        <BotonCardPerfilStyled style={{color:`${activoAnterior}`}} onClick={cambioCardMenos}>
                            ¡Ver Anterior!
                        </BotonCardPerfilStyled>
                        <BotonCardPerfilStyled style={{color:`${activoMas}`}} onClick={cambioCardMas}>
                            ¡Ver más!
                        </BotonCardPerfilStyled>
                    </div>
                </>
                :<Loading/>
            }
        </PerfilStyled>
    )
}
export default Perfil

const PerfilStyled=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${Theme.colorBg};
    .boxPerfil{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .boxButtonPages{
        display: flex;
        width: 75vw;
    }
`

const BotonCardPerfilStyled=styled.button`
    padding: 10px;
    margin: 10px;
    width: 100%;
    background-color: ${Theme.colorBg};
    color: ${Theme.colorEnlace};
    border: none;
    border: 1px solid ${Theme.colorLineaBorde};
    border-radius: 15px;
    letter-spacing: 1.5px;
    transition: all .25s ease-in-out;
    &:hover{
        color: ${Theme.colorEnlaceHover};
        background-color: ${Theme.colorBgHover};
    }
`
