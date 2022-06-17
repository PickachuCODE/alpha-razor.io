import React, { useEffect, useState } from 'react'
import "../Assets/Styles/RazorEditor.css"
import { useTheme } from '../ThemeManger/Themes';
import Editor from './Editor';
import { ToolContentsLeft, ToolContentsRight } from './ToolContents';

export default function RazorEditor(props) {
    const { theme } = useTheme()
    
    return (
        <div className="RazorEditorLayout">
            {/* TopSection */}
            <div
                className="TopSection"
                style={{ background: theme.taskBarColor }}
            ></div>

            {/* MiddleSection */}
            <div
                className="MiddleSection"
                style={{ background: theme.secondaryColor }}
            >
                <MiddleSection />
            </div>

            {/* Bottom Section */}
            <div
                className="BottomSection"
                style={{ background: theme.baseColor }}
            ></div>
        </div>
    );
}

function MiddleSection() {
    const { theme } = useTheme()
    const [selectedTool, setSelectedTool] = useState(null)
    const [selectedToolRight, setSelectedToolRight] = useState(null)
    const [activeToolButton, setActiveToolButton] = useState(null)
    const [activeToolButtonRight, setActiveToolButtonRight] = useState(null)

    const handleToolBarExit = () => {
        // e.preventDefault()
        setSelectedTool(null)
        setActiveToolButton(null)
        setSelectedToolRight(null)
        setActiveToolButtonRight(null)
    }
    const handleElement = () => {
        setSelectedTool("isElement")
        setActiveToolButton("isElement")
    }
    const handleCMS = () => {
        setSelectedTool("isCms")
        setActiveToolButton("isCms")
    }
    const handleDesign = () => {
        setSelectedToolRight("isDesign")
        setActiveToolButtonRight("isDesign")
    }
    return (
        <div className="MiddleWrap" >
            <div className="toolwrap" style={{ marginRight: "15px" }}>
                <ToolContentsLeft
                    toolCurrent={selectedTool}
                    action={handleToolBarExit}
                />
                <div className="toolwrapTop" style={{ justifyContent: "right" }}>
                    <div className="TWwrap">
                        <TaskButtons
                            action={handleElement}
                            main="isElement"
                            isActive={activeToolButton}
                        />
                        <TaskButtons
                            action={handleCMS}
                            main="isCms"
                            isActive={activeToolButton}
                        />
                    </div>
                </div>
                <div
                    className="toolwrapBottom"
                    style={{ justifyContent: "right" }}
                >
                    <div className="TWwrap">
                        <TaskButtons
                            action={handleCMS}
                            main="isCms"
                            isActive={activeToolButton}
                        />
                        <TaskButtons
                            action={handleCMS}
                            main="isOther"
                            isActive={activeToolButton}
                        />
                    </div>
                </div>
            </div>

            <div className="editorWrap" onMouseEnter={handleToolBarExit}>
                    <Editor />
                
            </div>

            <div className="toolwrap" style={{ marginLeft: "15px" }}>
                <ToolContentsRight
                    toolCurrent={selectedToolRight}
                    action={handleToolBarExit}
                />
                <div className="toolwrapTop" style={{ justifyContent: "left" }}>
                    <div className="TWwrap">
                        <TaskButtonsRight
                            action={handleDesign}
                            main="isDesign"
                            isActive={activeToolButtonRight}
                        />
                        <TaskButtonsRight
                            action={handleDesign}
                            main="isLayers"
                            isActive={activeToolButtonRight}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function TaskButtons(props) {
    const { theme } = useTheme()
    return (
        <div className="TaskButton" onClick={props.action} style={{
            display: props.isActive === null ? "block" : (
                props.isActive === props.main ? "block" : "none"
            ), border: props.isActive === null ? `none` : props.isActive === props.main ? `solid 2px ${theme.baseColor}` : "none"
        }}>

        </div>
    )
}
function TaskButtonsRight(props) {
    const { theme } = useTheme()
    return (
        <div className="TaskButton" onClick={props.action} style={{
            display: props.isActive === null ? "block" : (
                props.isActive === props.main ? "block" : "none"
            ), border: props.isActive === null ? `none` : props.isActive === props.main ? `solid 2px ${theme.baseColor}` : "none"
        }}>

        </div>
    )
}