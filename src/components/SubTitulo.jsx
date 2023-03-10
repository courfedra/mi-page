import styled from "styled-components"
import Theme from "./Themes"

const SubTitulo = ({id,titulo,texto,heigth})=>{
    return(
        <SubTituloStyled style={{height:`${heigth}`}}>
            <h2 id={id}>{titulo}<span className="continueWriting">_</span></h2>
            <p>{texto}</p>
        </SubTituloStyled>
    )
}
export default SubTitulo

const SubTituloStyled=styled.div`
    width: 100%;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBg};
    .continueWriting{
        animation: animate .4s infinite alternate;
        color:${Theme.colorTitulo};
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
        color:${Theme.colorTxt}
    }
    
`