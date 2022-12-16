import ProyectCard from "../components/ProyectCard"
import {dataProyects as data} from "../data/dataProyects"
const Proyects = ()=>{
    return(
        <div className="proyects">
            {
                data.map((e)=>{return(<ProyectCard datos={e} key={e.id}/>)
                })
            }
        </div>
    )
}

export default Proyects