import Theme from "./Themes"
import styled from "styled-components"
import logoPage from "../assets/logoPage.svg"

const Footer = ()=>{

return(
        <>
            <Pie>
                <img src={logoPage} alt="Logo Franandres" />
                <UlStyled>
                    <ALinkStyled target="_blank" href="https://www.linkedin.com/in/franandres/">Linkedin</ALinkStyled>
                    <ALinkStyled target="_blank" href="https://github.com/courfedra">Github</ALinkStyled>
                    <ALinkStyled target="_blank" href="#">Proximamente</ALinkStyled>
                </UlStyled>
            </Pie>
            <CopyRigth>
                Web diseñada y creada por Francisco Andres - 2.022
            </CopyRigth>
        </>
    )
}

export default Footer;

const Pie = styled.main`
    border-top: 2px solid ${Theme.colorLineaBorde};
    background-color:${Theme.colorBg};
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    img{
        width: 60px;
        filter: grayscale(1);
        transition: all .25s ease-in-out;
        &:hover{
            filter: grayscale(0);
        }
    }
`
const UlStyled=styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    @media screen and (max-width:900px) {
        display: flex;
        flex-direction: column;
    }
`
const ALinkStyled=styled.a`
    text-decoration: none;
    letter-spacing: 1.5px;
    color: ${Theme.colorEnlace};
    &:hover{
        color: ${Theme.colorEnlaceHover};
    }
`
const CopyRigth=styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    letter-spacing: 1.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${Theme.colorTxt};
    background-color: ${Theme.colorLineaBorde};
`
