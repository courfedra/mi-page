import Theme from "../Themes"
import styled from "styled-components"

const NumberCard = ({posicion,array}) => {
    return(
        <NumberCardStyled>
            {
                array.map((e)=>{
                    if (e.id===posicion){
                        return(
                            <PosicionActiveStyled key={e.id}>
                                <p>0</p>
                            </PosicionActiveStyled>)
                        
                    }else{
                        return(
                            <PosicionNoActiveStyled key={e.id}>
                                <p>0</p>
                            </PosicionNoActiveStyled>)
                    }
                })
            }
        </NumberCardStyled>
    )
}
export default NumberCard

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
    p{color: ${Theme.colorEnlace}}
`

const PosicionNoActiveStyled=styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    text-align: center;
    p{color: ${Theme.colorBg}}
`
