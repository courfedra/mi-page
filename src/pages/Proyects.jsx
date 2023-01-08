import ProyectCard from "../components/ProyectCard"
import {dataProyects as data} from "../data/dataProyects"
import styled from "styled-components"

const ProyectStyled=styled.div`
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0;
        width: 100%;
        justify-content: center;
`

const Proyects = ()=>{

    return(
        <ProyectStyled>
            {
                data.map((e)=>{return(<ProyectCard datos={e} key={e.id}/>)
                })
            }
        </ProyectStyled>
    )
}

export default Proyects