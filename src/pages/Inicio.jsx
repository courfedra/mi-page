import styled from "styled-components"
import Theme from "../components/Themes"

const CardInfo = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.ibb.co/Cb6sLtv/paint-5699263-1920.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    h1{
        color: ${Theme.LineaBorde};
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
    }
`

const BtnInfo = styled.button`
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    letter-spacing: 2px;
    color: ${Theme.colorEnlace};
    background-color: ${Theme.colorBg};
    border: 1px solid ${Theme.colorLineaBorde};
    transition: all .2s ease-in-out;
    &:hover{
        color: ${Theme.colorEnlaceHover};
    }
`

const Inicio =()=>{

return(
    <CardInfo>
        <h1>Hola, soy<span>Francisco Andres</span></h1>
        <h2>Frontend Developer</h2>
        <BtnInfo>Descargar CV</BtnInfo>
    </CardInfo>
    )
}
export default Inicio