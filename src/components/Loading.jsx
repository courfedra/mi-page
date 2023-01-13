import styled from "styled-components"
import Theme from "./Themes"
const Loading = () =>{

    return(
        <LoadingStyled>
                <div className="loadingBall">L</div>
                <div className="loadingBall">O</div>
                <div className="loadingBall">A</div>
                <div className="loadingBall">D</div>
                <div className="loadingBall">I</div>
                <div className="loadingBall">N</div>
                <div className="loadingBall">G</div>
        </LoadingStyled>
        )
    }
export default Loading

const LoadingStyled=styled.div`
    width: 25%;
    height: 80vh;
    display:flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    .loadingBall{
        width: 25px;
        height: 25px;
        border-radius: 100%;
        margin: 5px;
        font-size: 1.5em;
    }
    .loadingBall:nth-child(1){
        animation: loader .5s linear infinite alternate;
    }
    .loadingBall:nth-child(2){
        animation: loader .5s linear .1s infinite alternate;
    }
    .loadingBall:nth-child(3){
        animation: loader .5s linear .2s infinite alternate;
    }
    .loadingBall:nth-child(4){
        animation: loader .5s linear .3s infinite alternate;
    }
    .loadingBall:nth-child(5){
        animation: loader .5s linear .4s infinite alternate;
    }
    .loadingBall:nth-child(6){
        animation: loader .5s linear .5s infinite alternate;
    }
    .loadingBall:nth-child(7){
        animation: loader .5s linear .6s infinite alternate;
    }
    @keyframes loader {
        0%{
            transform: translateY(0px);
        }
        100%{
            transform: translateY(-15px);
            color: ${Theme.colorEnlace};
        }
    }


`