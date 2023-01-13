import styled from "styled-components"
import { useEffect } from "react"
const Loading = () =>{

    return(
        <LoadingStyled>
                <p>Loading...</p>
        </LoadingStyled>
        )
    }
export default Loading

const LoadingStyled=styled.div`
    width: 100%;
    height: 80vh;
    display:flex;
    justify-content: center;
    align-items: center;
`