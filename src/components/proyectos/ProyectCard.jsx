import styled from "styled-components"
import ProyectItem from "./ProyectItem"

const ProyectCard = ({datos})=>{
    return(
        <ProyectCardStyled>
            {datos.map((e)=>{return(<ProyectItem datos={e} key={e.id}/>)})}
        </ProyectCardStyled>
    )
}
export default ProyectCard

const ProyectCardStyled=styled.div`
        margin: 5px;
        padding: 5px;
        width: 80%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        
`
