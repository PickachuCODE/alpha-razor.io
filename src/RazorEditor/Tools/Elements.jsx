import { useEffect, useState } from "react"
import { useEditor } from "../../RazorFunctions/RazorEdtorContext"
import { useTheme } from "../../ThemeManger/Themes"
let countId = 0
export function ElementBox(props) {
    let isCreated = false
    const {iEditor} = useEditor()
    const { theme } = useTheme()
    function HandleDragStart() {
       isCreated = true
        console.log("start")
        StartDragOver()
    }
    function CreateElement(target) {
        
        const element = document.createElement(props.mainNode)
        if (["div", "section", "header"].includes(props.mainNode)) {
            element.classList.add("editor-razor-droppable")
        }
        console.log(element.setAttribute("id", `${countId++}-razor`))
        console.log(isCreated)
        element.innerHTML = props.nodeContent
        element.style.padding = "20px"
        console.log(element.children)
        const getChildren = element.children
        for (const child of getChildren) {
            console.log(child.id = `${countId++}-razor`)
        }
        target.append(element)
    }
    function StartDragOver() {
        const droppable = iEditor.current.contentWindow.document.querySelectorAll(".editor-razor-droppable")
        droppable.forEach(element => {
            element.addEventListener("dragover", (e) => {
                e.preventDefault()
            })
            element.addEventListener("drop", (e) => {
                e.preventDefault()
                if (isCreated === true && e.target.classList.contains("editor-razor-droppable")) {
                    CreateElement(e.target)
                    console.log(e)
                    isCreated = false
                    return
                }
            })
        });
        
    }
    return (
        <div className="ECBox"
            style={{
                display: "grid", justifyContent: "center", alignItems: "center", color: 'white', height: "42px", width: "42px", background: theme.primaryColor
            }}
            draggable={true}
            onDragStart={HandleDragStart}>
            H1
        </div>
    )
}