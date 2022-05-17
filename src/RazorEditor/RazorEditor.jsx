import React from 'react'
import "../Assets/Styles/RazorEditor.css"
import { useTheme } from '../ThemeManger/Themes';
import Editor from './Editor';

export default function RazorEditor(props) {
  const {theme} = useTheme()
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
  return (
      <div className="MiddleWrap">
          <div className="toolwrap" style={{ marginRight: "8px" }}>
              <div className="toolwrapTop" style={{ justifyContent: "right" }}>
                  <div className="TWwrap">
                      <TaskButtons />
                      <TaskButtons />
                  </div>
              </div>
              <div
                  className="toolwrapBottom"
                  style={{ justifyContent: "right" }}
              >
                  <div className="TWwrap">
                      <TaskButtons />
                      <TaskButtons />
                  </div>
              </div>
          </div>

          <div className="editorWrap">
              <Editor/>
          </div>

          <div className="toolwrap" style={{ marginLeft: "8px" }}>
              <div className="toolwrapTop" style={{ justifyContent: "left" }}>
                  <div className="TWwrap">
                      <TaskButtons />
                      <TaskButtons />
                  </div>
              </div>
          </div>
      </div>
  );
}

function TaskButtons(props) {
  return (
    <div className="TaskButton">

    </div>
  )
}