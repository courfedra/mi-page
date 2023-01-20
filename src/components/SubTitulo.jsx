import styled from "styled-components"
import Theme from "./Themes"

const SubTitulo = ({id,titulo,texto,color})=>{
    return(
        <SubTituloStyled style={{background:`${color}`}}>
            <h2 id={id}>{titulo}<span className="continueWriting">_</span></h2>
            <p>{texto}</p>
        </SubTituloStyled>
    )
}
export default SubTitulo

const SubTituloStyled=styled.div`
    width: 100%;
    min-height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBgHover};
    .continueWriting{
        animation: animate .4s infinite alternate;
        @keyframes animate {
            from{
                color: transparent;
            };
        }
    }
    text-align: center;
    h2{
        color: ${Theme.colorTitulo};
        letter-spacing: 5px;
    }
    p{
        color:${Theme.colorTxtBg}
    }
    
`