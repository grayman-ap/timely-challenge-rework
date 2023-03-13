import React, {useState, createContext, useContext} from 'react'
const GlobalContext = createContext()

export const ContextProvider = ({children})=>{
    const [isMouseHover, setIsMouseHover] = useState(false)

    const handleMouseEnter = (id)=>{
        setIsMouseHover(id)
    }
    const handleMouseLeave = ()=>{
            setIsMouseHover(false)
    }
    const handleNavOpen = ()=>{
        
    }
    const handleNavClose = ()=>{
            setIsMouseHover(false)
    }
    return(
        <GlobalContext.Provider value = {{
            handleMouseEnter,
            handleMouseLeave,
            setIsMouseHover,
            isMouseHover,
            handleNavOpen,
            handleNavClose
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = ()=> useContext(GlobalContext)