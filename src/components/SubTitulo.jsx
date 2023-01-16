import styled from "styled-components"
import Theme from "./Themes"

const SubTitulo = ({texto, id})=>{
    return(
        <H2SubTitulo>
            <h2 id={id}>{texto}<span className="continueWriting">_</span></h2>
        </H2SubTitulo>
    )
}
export default SubTitulo

const H2SubTitulo=styled.div`
    width: 100%;
    min-height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    color: ${Theme.colorTitulo};
    background-color: ${Theme.colorBg};
    .continueWriting{
            animation: animate .4s infinite alternate;
            @keyframes animate {
                from{
                    color: transparent;
                };
            }
        }
    
`