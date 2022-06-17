import React, { useEffect, useRef } from 'react'
import Frame from "react-frame-component";
import { useEditor } from '../RazorFunctions/RazorEdtorContext';
// const { ipcRenderer } = require("./electron");


export default function Editor() {
    const initEditor = `
    <!DOCTYPE html>
    <head>
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: borderbox;
        }
        </style>
    </head>
    <body id=${"editor-razor"}>
    <body>
    </html>`
    const { setIEditor} = useEditor()
    let editorRef = useRef()
    useEffect(() =>{
        setIEditor(editorRef)
    })
    return (
        <div className="editor">
            
            <Frame
                initialContent={initEditor}
                mountTarget="#editor-razor"
                id="RAZOREDITOR"
                ref={editorRef}
            >
                <InitEditor/>
        </Frame>
        </div>
    );
}

function InitEditor() {
    const {iEditor} = useEditor()
    useEffect(() => {
        const BODY_EDITOR = iEditor.current.contentWindow.document.getElementById("editor-razor")
        BODY_EDITOR.classList.add("editor-razor-droppable")
        BODY_EDITOR.style.height = "95vh"

        const droppable = iEditor.current.contentWindow.document.querySelectorAll(".editor-razor-droppable")
        droppable.forEach(element => {
            element.addEventListener("mouseover", (e) => {
                e.preventDefault()
                const targetData = {
                    height: e.target.clientHeight,
                    width: e.target.clientWidth,
                }
                // console.log(targetData)
            })
        })
    },[])

    const editor_style = {
        selectorHover: {
            height: "10px",
            width: "10px",
            border: "3px solid red"
        }
    }

    return (
        <div id="editor-razor-util">
            <div id="editor-razor-selector-hover" style={editor_style.selectorHover}></div>
        </div>
    ) 
}