import React, { createContext, useContext, useEffect, useState } from "react";

const EditorContext = createContext({})

const useEditor = () => useContext(EditorContext)

const EditorContextProvider = ({ children }) => {
    const [iEditor, setIEditor] = useState()
    const [targetData, setTargetData] = useState({})

    function selector_Hover(target) {
        setTargetData({ p: "and" })
        const hoverElement = iEditor.current.contentWindow.document.getElementById("editor-razor-selector-hover")
        hoverElement.style.height = `${target.clientHeight}px`
        
        console.log(hoverElement.style.height)
        // document.getElementById().clientHeight
    }

    const themeValues = {
        setIEditor,
        iEditor,
        selector_Hover,
    }
    return (
        <EditorContext.Provider value={themeValues}>
            {children}
        </EditorContext.Provider>
    )
}
export{useEditor, EditorContextProvider}