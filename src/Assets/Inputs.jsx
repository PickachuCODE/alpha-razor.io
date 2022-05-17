import React from 'react'
import { Icon } from "@iconify/react";
import search from "@iconify/icons-akar-icons/search";
import { useTheme } from '../ThemeManger/Themes';


function InputSearch() {
    const { theme } = useTheme()

    const styleInput = {
        width:"200px",
        height: "30px",
        color: theme.textColor,
        border: 'none',
        textAlign: 'right',
    }
    return (
        <div className="inputBox" style={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            height: 'fit-content',
            background: theme.projectColorSecond,
            borderRadius: '10px',
            padding: '5px 10px',
            marginBottom: '8px'
        }}>
            <input type="text" name="textSearch" id="textSearch" style={styleInput} placeholder='Search Project'/>
            <div style={{
                paddingLeft: "6px",
                height: 'fit-content',
            }}>
                <Icon
                    icon={search}
                    color={theme.altColor}
                    style={{
                        marginTop: '3px',
                        textAlign: "center",
                        display: 'inline'
                    }}
                    height={20}
                        />
            </div>
        </div>
    )
}
function SimpleInput(props) {
    const { theme } = useTheme();
    const styleInput = {
        width: "280px",
        height: "30px",
        color: theme.textColor,
        textAlign: "left",
        border : "none"
    };
    return (
        <div
            className="inputBox"
            style={{
                border: props.error === "noInput" ? "2px solid red" : "none",
                alignItems: "center",
                width: "fit-content",
                height: "fit-content",
                background: theme.projectColorSecond,
                borderRadius: "10px",
                padding: "5px 5px",
                marginBottom: "8px",
            }}
        >
            <input
                type="text"
                name="textSearch"
                id="textSearch"
                style={styleInput}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.changeFunction}
                autoFocus={true}
            />
            
        </div>
    );
}


export {InputSearch, SimpleInput }