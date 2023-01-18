import styled from "styled-components"
import Theme from "../Themes"
import SubTitulo from "../SubTitulo"

const Contacto = () => {
    return(
        <>
            <SubTitulo id="contacto" texto="Contacto"/>
            <form>
                <fieldset style={{padding:"50px"}}>
                    <input type="text"></input>
                    <button type="submit">Enviar</button>
                </fieldset>
            </form>
        </>
    )
}
export default Contacto