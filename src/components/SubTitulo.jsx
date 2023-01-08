import styled from "styled-components"
import Theme from "./Themes"

const H2SubTitulo=styled.h2`
    width: 50vw;
    min-height: 10vh;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2.5px;
    border-radius: 15px;
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