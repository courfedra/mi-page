import { createContext,useState } from "react"
export const ColorContext=createContext();
    const ColorContextProvider = ({children})=>{

        //NOMBRE DE PAGINA
        const [nombrePagina,setNombrePagina]=useState("Fran Andres")
        //FUNCION CAMBIAR NOMBRE PAGINA
        const cambioNombrePagina = (nombre) =>{
            setNombrePagina(nombre)
        }


        return(
            <ColorContext.Provider value={{cambioNombrePagina,nombrePagina}}>
                {children}
            </ColorContext.Provider>
        )
    }

 export default ColorContextProvider