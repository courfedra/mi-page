import Theme from "./Themes"
import styled from "styled-components"

const NumberCardStyled=styled.div`
    width: 50%;
    height: 5vh;
    padding: 5px;
    display: flex;
    justify-content: center;
`

const PosicionActiveStyled=styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color:green;
    p{color: ${Theme.colorEnlace}}
`

const PosicionNoActiveStyled=styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color:red;
    p{color: ${Theme.colorEnlace}}
`

const NumberCard = ({posicion,totalPag,array}) => {
    return(
        <NumberCardStyled>
            {
                array.map((e)=>{
                    if (e.id===posicion){
                        return(
                            <PosicionActiveStyled key={e.id}>
                                0
                            </PosicionActiveStyled>)
                        
                    }else{
                        return(
                            <PosicionNoActiveStyled key={e.id}>
                            0
                            </PosicionNoActiveStyled>)
                    }
                })
            }
        </NumberCardStyled>
    )
}
export default NumberCard