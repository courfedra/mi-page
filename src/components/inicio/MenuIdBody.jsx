import styled from "styled-components"
import Theme from "../Themes"

const MenuIdBody = () =>{
    return(
        <>
            <MenuId>
                <ul>
                    <li><a href="#inicio">Arriba</a></li>
                    <li><a href="#hardskill">Hard Skill</a></li>
                    <li><a href="#softskill">Soft Skill</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </MenuId>
        </>
    )
}
export default MenuIdBody

const MenuId=styled.div`
    background-color: ${Theme.colorBg};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 20;
    ul{
        width: 80%;
        margin: 5px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        list-style: none;
        li{
            margin: 5px;
            padding: 2.5px;
            a{
                text-decoration: none;
                color:${Theme.colorEnlace}
            }
        }
    }
`