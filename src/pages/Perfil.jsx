import CardPerfil from "../components/CardPerfil"
import {dataPerfil as data} from "../data/dataPerfil"
import {useState} from "react"
const Perfil = ()=>{
    const [page,setPage] = useState(0)

    const cambioCard=()=>{
        page<(data.length-1)
        ?setPage(page+1)
        :setPage(page-(data.length-1))
    }
    return(
        <div className="perfil">
            <CardPerfil datos={data[page]} posicion={page+1} totalPag={data.length} array={data}/>
            <button className="btnCardPerfil" onClick={cambioCard}>¡Quiero conocerte más!</button>
        </div>
    )
}
export default Perfil