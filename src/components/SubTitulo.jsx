import styled from "styled-components"
import Theme from "./Themes"

const SubTitulo = ({id,titulo,texto,heigth,activeScroll})=>{
    return(
        <SubTituloStyled style={{height:`${heigth}`}}>
            <h2 id={id}>{titulo}<span className="continueWriting">_</span></h2>
            <p>{texto}</p>
            <div className={`scrollTitle ${activeScroll}`} >
                <ul>
                    <li>S</li>
                    <li>C</li>
                    <li>R</li>
                    <li>O</li>
                    <li>L</li>
                    <li>L</li>
                </ul>
            </div>
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
    .scrollTitle{
        display: none;
    }
    .scrollTitle.active{
        display: flex;
        color:${Theme.colorTxt};
        ul{
            list-style: none;
            position: relative;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            ::before{
                content: "";
                width: 100%;
                display: flex;
                flex-direction: column-reverse;
                background-color: ${Theme.colorBg};
                border-top: 2px solid ${Theme.colorTitulo};
                overflow: hidden;
                position: absolute;
                animation: appearText 2s alternate .5s infinite ease-in-out;
            }

        }
        @keyframes appearText {
            0%
            {
                top: 0;
                height: 100%;
            }
            90%,100%
            {
                top:100%;
                height: 0;
            }
        }
    }
    
`