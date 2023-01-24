import styled from "styled-components"
import Theme from "../Themes"
const ListTopic = ({topicos}) => {
    return( 
        <UlStyled>
            <h4>Temas vistos</h4>
            {topicos&&topicos.map(elem=>
            <LiStyled key={topicos.indexOf(elem)}>
                {(topicos.indexOf(elem)+1)+" - "+elem}
            </LiStyled>
            )}
        </UlStyled>
    )
}

export default ListTopic

const UlStyled=styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4{
        color: ${Theme.colorTitulo};
        letter-spacing: 2px;
        text-transform: uppercase;
        text-decoration-line: underline;
    }
`


const LiStyled=styled.li`
    color:${Theme.colorTxt};
    list-style: none;
    padding: 5px;
    width: 100%;
    text-align: left;
`