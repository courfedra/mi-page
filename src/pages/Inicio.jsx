import styled from "styled-components"
import Theme from "../components/Themes"

const Inicio =()=>{

return(
    <CardInfo>
        <CardPresentation>
            <h1>Hola, soy<span>Francisco Andres</span></h1>
            <h2><i>Frontend Developer</i><span className="continueWriting">_</span></h2>
            <BtnInfo>Descargar CV</BtnInfo>
        </CardPresentation>
    </CardInfo>
    )
}
export default Inicio

const CardInfo = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-image: url("https://i.ibb.co/bbJbMBW/wallpaperflare-com-wallpaper.jpg");
    background-size: auto;
    background-attachment: fixed;
    background-position: center;
    
`

const CardPresentation=styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    justify-content: center;
    text-align: center;
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
    animation: 5s ease-in-out .5s infinite alternate moveTop;
            @keyframes moveTop {
                0%{
                    position: absolute;
                    top: 0%;
                };
                100%{
                    position: absolute;
                    top: 20%;
                }
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
        background-color: ${Theme.colorBgHover};
    }
`
