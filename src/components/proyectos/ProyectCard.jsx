import styled from "styled-components"
import Theme from "../Themes"
import ProyectItem from "./ProyectItem"
import Loading from "../Loading"

const ProyectCard = ({datos})=>{
    return(
        <ProyectCardStyled>
            {datos.length!==0
            ?datos.map((e)=>{return(<ProyectItem datos={e} key={e.id}/>)})
            :<Loading/>} 
        </ProyectCardStyled>
    )
}
export default ProyectCard

const ProyectCardStyled=styled.div`
        margin: 5px;
        margin-top: 10%;
        padding: 5px;
        width: 80%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        @media screen and (max-width:900px) {
            margin-top: 20%;   
        }
        
`
