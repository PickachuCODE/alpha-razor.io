import React from 'react'
import { useTheme } from '../ThemeManger/Themes';
import { Icon } from "@iconify/react";
import circlePlus from "@iconify/icons-akar-icons/circle-plus";
function RecButton(props) {
  const {theme} = useTheme()
  return (
      <button style={{ background: '#2BEA6C', color: 'white'}} onClick={props.perform}>
      {props.iconImage !== undefined ? <div style={{paddingRight: '6px'}} >{props.iconImage}</div>: <></>}
      <p>{ props.btnText }</p>
    </button>
  )
}

function AltButton(props) {
  const {theme} = useTheme()
  return (
      <button
          style={{ background: theme.altColor, color: theme.primaryColor }}
          onClick={props.perform}
      >
          {props.iconImage !== undefined ? (
              <div style={{ paddingRight: "6px" }}>{props.iconImage}</div>
          ) : (
              <></>
          )}
          <p>{props.btnText}</p>
      </button>
  );
}

function NewProjectButton(props) {
    const { theme } = useTheme();
    return (
        <button
            style={{padding: "0", height: "fit-content",  width: "fit-content", background: 'none', color: theme.primaryColor }}
            onClick={props.perform}
        >
           <div
                    className="newProject"
                    style={{ background: theme.projectColorSecond }}
                >
                    <div className="wrap-newProject">
                        <Icon
                        icon={circlePlus}
                        color={theme.altColor}
                        style={{margin: '0  auto 15px', textAlign: "center", display: 'block'}}
                        height={30}
                            />
                        <p style={{ color: theme.textColor , fontSize: '12px'}}>New Project</p>
                    </div>
                    
                </div> 
        </button>
    );
}
function ProjectActionButton(props) {
  const {theme} = useTheme()
  return (
      <button style={{ background: '#2BEA6C', color: 'white', float:props.float }} onClick={props.perform}>
      {props.iconImage !== undefined ? <div style={{paddingRight: '6px'}} >{props.iconImage}</div>: <></>}
      <p>{ props.btnText }</p>
    </button>
  )
}

export { AltButton, RecButton, NewProjectButton, ProjectActionButton };