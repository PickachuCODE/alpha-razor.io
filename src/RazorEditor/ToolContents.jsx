import React, { useEffect } from 'react'
import { useTheme } from '../ThemeManger/Themes'
import { Test } from './Tools/Design';
import { ElementBox } from './Tools/Elements';

export function ToolContentsLeft(props) {
    return (
        <>
            {props.toolCurrent === "isElement" ? (
                <ElementTools />
            ) : props.toolCurrent === "isCms" ? (
                <CMSTools />
            ) : (
                <></>
            )}
        </>
    );
}

function ElementTools() {
    const { theme } = useTheme()
    
    return (
        <div
            className="toolprops"
            style={{ background: theme.toolBarColor }}
        >
            <div className="toolContent">
                <div className="toolTitle">
                    <p style={{ color: theme.textColor }}>Elements</p>
                </div>
                <div

                    className="toolChildElements"
                    style={{ background: theme.toolBarChildColor }}
                >
                    <p
                        className="toolChildElementTitle"
                        style={{ color: theme.textColor }}
                    >
                        Basic Elements
                    </p>

                    <div className="toolChildChildren">
                        <ElementBox mainNode={"div"} nodeContent={`<h2>Heeading 2 </h2><div><p>Balling</p></div> `}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
function CMSTools() {
    const { theme } = useTheme();
    console.log("props.toolCurrent");
    return (
        <div
            className="toolprops"
            style={{ background: theme.toolBarColor }}
        >
            <div className="toolContent">
                <div className="toolTitle">
                    <p style={{ color: theme.textColor }}>CMS</p>
                </div>

            </div>
        </div>
    );
}





export function ToolContentsRight(props) {
    return (
        <>
            {props.toolCurrent === "isDesign" ? (
                <DesignTools />
            ) : (
                <></>
            )}
        </>
    );
}
function DesignTools() {
    const { theme } = useTheme();
    console.log("props.toolCurrent");
    return (
        <div
            className="toolprops toolright"
            style={{ background: theme.toolBarColor }}
        >
            <div className="toolContent">
                <div className="toolTitle righttool">
                    <p style={{ color: theme.textColor, textAlign:'right' }}>Design</p>
                </div>
                <Test/>
            </div>
        </div>
    );
}

