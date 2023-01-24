import styled from "styled-components"
import Theme from "../Themes"
import SubTitulo from "../SubTitulo"

const Contacto = () => {
    return(
        <>
            <SubTitulo 
                id="contacto" 
                color={Theme.colorLineaBorde} 
                titulo="Contacto" 
                texto="¡Envíame un mensaje y lo leeré con todo gusto!"/>
            <ContactoContainer>
                <FormStyled>
                    <FieldsetStyled>
                        <LabelInput>
                            <label for="inputTitulo">Título del mensaje</label>
                            <input type="text" name="inputTitulo" id="inputTitulo" placeholder="Titulo de mensaje"></input>
                        </LabelInput>
                        <LabelInput>
                            <label for="inputCorreo">Correo Electrónico</label>
                            <input type="email" name="inputCorreo" id="inputCorreo" placeholder="Correo Electrónico"></input>
                        </LabelInput>
                        <LabelInput>
                            <label for="inputTextarea">Escribe tu mensaje</label>
                            <textarea id="inputTextarea" name="inputTextarea" placeholder="Mensaje..."></textarea>
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
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colorBg};
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
        width:200px;
        height: 200px;
        border: none;
        border-radius: 100px;
        margin: 5px;
        padding: 5px;
        background-color: ${Theme.colorBg};
        color:${Theme.colorEnlace};
        font-size:1.5em;
        border: 2px solid ${Theme.colorLineaBorde};
        transition: all .25s ease-in-out;
        &:hover{
            background-color: ${Theme.colorBgHover};
            color:${Theme.colorEnlaceHover};
            border-radius: 0px;
        }
    }
    @media screen and (max-width:900px) {
        flex-direction: column;
        padding: 2.5px;
        button{
            width: auto;
            height: 20%;
            margin: 5px;
            border-radius: 15px;
        }
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
    color:${Theme.colorTxt};
    input{
        width: 100%;
        border-radius: 10px;
        padding: 2.5px;
    }
    label{
        margin: 5px 0;
    }
    textarea{
        resize:none;
        width:100%;
        height:25vh;
        border-radius: 10px;
        padding: 5px;
    }
`