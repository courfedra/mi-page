import { createContext,useState } from "react"
import Themes from "../components/Themes"
export const ColorContext=createContext();
    const ColorContextProvider = ({children})=>{
        const[colorBg,setColorBg]=useState(Themes.white.fondo)
        const[colorLineaBorde,setColorLineaBorde]=useState(Themes.white.lineaBorde)
        const[colorTxt,setColorTxt]=useState(Themes.white.texto)
        const[colorTitulo,setColorTitulo]=useState(Themes.white.titulo)
        const[colorEnlace,setColorEnlace]=useState(Themes.white.enlace)
        const[colorEnlaceHover,setColorEnlaceHover]=useState(Themes.white.enlaceHover)
            
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