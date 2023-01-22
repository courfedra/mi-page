import styled from "styled-components"
import Theme from "../Themes"


const Inicio =()=>{

return(
    <CardInfo>
        <CardPresentation>
            <h1>Hola soy<span>Francisco Andres</span></h1>
            <h2><i>Frontend Developer</i><span className="continueWriting">_</span></h2>
        </CardPresentation>
        <CardLinks>
            <BtnInfo><a>Descargar CV</a></BtnInfo>
            <BtnInfo><a target="_blank" href="https://github.com/courfedra">GitHub</a></BtnInfo>
            <BtnInfo><a target="_blank" href="https://www.linkedin.com/in/franandres/">LinkedIn</a></BtnInfo>
            <BtnInfo><a href="#contacto">Contacto</a></BtnInfo>
        </CardLinks>
    </CardInfo>
    )
}
export default Inicio

const CardInfo = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  ${Theme.colorBg};
`

const CardPresentation=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1{
        color: ${Theme.colorTxt};
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-around;
        transition: all .1s ease-in-out;
        span{
            color: ${Theme.colorTitulo};
            padding: 15px;
            letter-spacing: 1.5px;
        }
    }
    h2{
        letter-spacing: 1.2px;
        color: ${Theme.colorTxt};
        .continueWriting{
            animation: animate .4s infinite alternate;
            @keyframes animate {
                from{
                    color: transparent;
                };
                to{
                    color: ${Theme.colorTxt};
                }
            }
        }
    }
    
`
const CardLinks=styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:900px) {
        width: 100%;
        display: flex; 
        flex-wrap: wrap; 
    }
`

const BtnInfo = styled.button`
    min-width: 200px;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    letter-spacing: 2px;
    background-color: ${Theme.colorBg};
    border: 1px solid ${Theme.colorLineaBorde};
    a{
        color: ${Theme.colorEnlace};
        text-decoration: none;
    }
    &:hover{
        background-color: ${Theme.colorBgHover};
        a{
            color: ${Theme.colorEnlaceHover};
        }
    }
`
