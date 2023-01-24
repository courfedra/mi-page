import{Link} from "react-router-dom"
import styled from "styled-components"
import Theme from "./Themes"
import logoPage from "../../public/logoPage.svg"
import { useState } from "react"

const NavBar = ()=>{
    
    const [clicked,setClicked]=useState(false)

    const mostrarMenu=()=>{
        clicked?setClicked(false):setClicked(true)
    }

    return(
        <>
            <Navbar>
                <NavbarLogo>
                    <Link to="/">
                        <img id="inicio" src={logoPage} alt="Logo Franandres"/>
                    </Link>
                </NavbarLogo>
                <div className={`navbarLink ${clicked?'active':''}`}>
                    <Link to="/" onClick={mostrarMenu}>Inicio</Link>
                    <Link to="/cursos" onClick={mostrarMenu}>Cursos</Link>
                    <Link to="/proyectos" onClick={mostrarMenu}>Proyectos</Link>
                    <Link to="/perfil" onClick={mostrarMenu}>Perfil</Link>
                </div>
                <HambMenuStyled onClick={mostrarMenu}>
                    <button className={`buttonBurger ${clicked}Active`}>
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                    </button>  
                </HambMenuStyled>
            </Navbar>
        </>
    )
}

export default NavBar


const Navbar = styled.nav`
    width: 100%;
    min-height: 10vh;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color:transparent;
    backdrop-filter: blur(5px);
    .navbarLink{
        transition: all .5s ease-in-out;
        margin: 5px;
        padding: 5px;
        a{
            font-size: 1.2em;
            letter-spacing: 1.5px;
            color: ${Theme.colorEnlace};
            text-decoration: none;
            padding: 5px;
            margin: 5px;
            &:hover{
                color:${Theme.colorEnlaceHover}
            }
        }
        @media screen and (max-width:900px) {
            position: absolute;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            top: 0;
            width: 100%;
            height: 100vh;
            left: -1500px;
            background-color: ${Theme.colorBg}f3;
        }
    }
    .navbarLink.active{
        @media screen and (max-width:900px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 100;
            height: 100vh;
        }
    } 
`
    
const NavbarLogo = styled.div`
    text-decoration: none;
    img{
        width: 75px;
        height: 75px;
    }
`

const HambMenuStyled = styled.div`
    display: none;
    @media screen and (max-width:900px){
        background-color: transparent;
        width: auto;
        display: flex;
        justify-content: end;
        align-items: center;
        border: none;
        transition:all .5s ease-in-out;
        .buttonBurger{
            border:none;
            background-color: transparent;
            z-index: 200;
            .burgerLine{
                background-color: ${Theme.colorEnlace};
                width: 25px;
                height: 2px;
                margin: 5px;
                transition: all .25s ease-in-out;              
            }
            
        }
        
        .trueActive{
            .burgerLine:nth-child(1){
                transform:rotate(45deg) translate(5px,5px);
            }
            .burgerLine:nth-child(2){
                transform:translateX(-30px);
                background-color:transparent
            }
            .burgerLine:nth-child(3){
                transform:rotate(-45deg) translate(5px,-5px)
            }
        }
        
    }






`

    
    


