import { createContext,useState } from "react"
export const ColorContext=createContext();
    const ColorContextProvider = ({children})=>{
        
    const[colorBg,setColorBg]=useState("#f5f5f5")
    const[colorTxt,setColorTxt]=useState("#101010")
    const[colorTitulo,setColorTitulo]=useState("#ababab")
        

    const cambioColor = (newColor)=>{

        setColorBg(newColor.fondo)
        setColorTxt(newColor.texto)
        setColorTitulo(newColor.titulo)
    }






    return(
        <ColorContext.Provider value={{cambioColor,colorBg,colorTxt,colorTitulo}}>
            {children}
        </ColorContext.Provider>
    )
}
 export default ColorContextProvider