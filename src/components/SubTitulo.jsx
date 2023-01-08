import styled from "styled-components"
import Theme from "./Themes"

const H2SubTitulo=styled.h2`
    width: 100%;
    min-height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    background-color: ${Theme.colorBg};
    color: ${Theme.colorTitulo};
    
`
const SubTitulo = ({texto})=>{
    return(
        <H2SubTitulo>
            {texto}
        </H2SubTitulo>
    )
}
export default SubTitulo