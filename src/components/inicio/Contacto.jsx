import styled from "styled-components"
import Theme from "../Themes"
import SubTitulo from "../SubTitulo"

const Contacto = () => {
    return(
        <>
            <SubTitulo 
                id="contacto" 
                color={Theme.colorBgHover} 
                titulo="Contacto" 
                texto="¡Envíame un mensaje o escríbeme en mis redes sociales!"/>
            <ContactoContainer>
                <FormStyled>
                    <FieldsetStyled>
                        <LabelInput>
                            <label for="inputTitulo">Título del mensaje</label>
                            <input type="text" id="inputTitulo" placeholder="Titulo de mensaje"></input>
                        </LabelInput>
                        <LabelInput>
                            <label for="inputCorreo">Correo Electrónico</label>
                            <input type="email" id="inputCorreo" placeholder="Correo Electrónico"></input>
                        </LabelInput>
                        <LabelInput>
                            <label for="inputTextarea">Escribe tu mensaje</label>
                            <textarea id="inputTextarea" placeholder="Mensaje..."></textarea>
                        </LabelInput>
                    </FieldsetStyled>
                    <button type="submit">Enviar</button>     
                </FormStyled>
            </ContactoContainer>
        </>
    )
}
export default Contacto

const ContactoContainer=styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBgHover};
`

const FormStyled=styled.form`
    width: 80%;
    height: 50%;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center ;
    button{
        width:20%;
        border: none;
        padding: 5px;
        background-color: ${Theme.colorBg};
        color:${Theme.colorEnlace};
        border: 2px solid ${Theme.colorLineaBorde};
        &:hover{
            background-color: ${Theme.colorBgHover};
            color:${Theme.colorEnlaceHover};
        }
    }
    @media screen and (max-width:900px) {
        flex-direction: column;
        padding: 2.5px;
    }
`

const FieldsetStyled=styled.fieldset`
    width: 75%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LabelInput=styled.div`
    width: 100%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color:${Theme.colorTxtBg};
    input{
        width: 100%;
    }
    label{
        margin: 5px 0;
    }
    textarea{
        resize:none;
        width:100%;
        height:25vh;}
`