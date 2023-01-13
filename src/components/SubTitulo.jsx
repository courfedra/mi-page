import styled from "styled-components"
import Theme from "./Themes"

const H2SubTitulo=styled.div`
    width: 100%;
    min-height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    background-image: url("https://i.ibb.co/XFJHff7/react-Back-Ground.jpg");
    background-size: cover;
    background-attachment:fixed;
    background-position: center;
    color: ${Theme.colorTitulo};
    
`
const SubTitulo = ({texto})=>{
    return(
        <H2SubTitulo>
            <h2>{texto}</h2>
        </H2SubTitulo>
    )
}
export default SubTitulo