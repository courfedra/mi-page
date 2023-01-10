import Theme from "./Themes"
import styled from "styled-components"
import logoPage from "../../public/logoPage.svg"

const Pie = styled.main`
    border-top: 2px solid ${Theme.colorLineaBorde};
    background-color:${Theme.colorBg};
    min-height: 15vh;
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    img{
        width: 100px;
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

const Footer = ()=>{

return(
        <Pie>
            <img src={logoPage} alt="Logo Franandres" />
            <UlStyled>
                <ALinkStyled target="_blank" href="https://www.linkedin.com/in/franandres/">Linkedin</ALinkStyled>
                <ALinkStyled target="_blank" href="https://github.com/courfedra">Github</ALinkStyled>
                <ALinkStyled target="_blank" href="#">Proximamente</ALinkStyled>
            </UlStyled>
        </Pie>
    )
}

export default Footer;