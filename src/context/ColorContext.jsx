import { createContext,useState } from "react"
export const ColorContext=createContext();
    const ColorContextProvider = ({children})=>{
        
    const[colorBg,setColorBg]=useState("#ababab")
    const[colorLineaBorde,setColorLineaBorde]=useState("#303030")
    const[colorTxt,setColorTxt]=useState("#101010")
    const[colorTitulo,setColorTitulo]=useState("#4d4d4d")
    const[colorEnlace,setColorEnlace]=useState("#221e1e")
    const[colorEnlaceHover,setColorEnlaceHover]=useState("#221e1e66")
        

    const cambioColor = (newColor)=>{

        setColorBg(newColor.fondo)
        setColorLineaBorde(newColor.lineaBorde)
        setColorTxt(newColor.texto)
        setColorTitulo(newColor.titulo)
        setColorEnlace(newColor.enlace)
        setColorEnlaceHover(newColor.enlaceHover)
    }






    return(
        <ColorContext.Provider value={{cambioColor,colorBg,colorLineaBorde,colorTxt,colorTitulo,colorEnlace,colorEnlaceHover}}>
            {children}
        </ColorContext.Provider>
    )
}
 export default ColorContextProvider