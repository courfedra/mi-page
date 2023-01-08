import DivPosicion from "../components/DivPosicion"
const NumberCard = ({posicion,totalPag,array}) => {
    return(
        <div className="numberCard">
            {
                array.map((e)=>{
                    if (e.id===posicion){
                        return(<DivPosicion key={e.id} clase="active"/>)
                    }else{
                        return(<DivPosicion key={e.id} clase="noActive"/>)
                    }
                })
            }
        </div>
    )
}
export default NumberCard