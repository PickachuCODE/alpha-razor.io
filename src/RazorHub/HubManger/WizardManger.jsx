import { SimpleInput } from "../../Assets/Inputs";
import { useTheme } from "../../ThemeManger/Themes";

import { Icon } from "@iconify/react";
import codepenFill from "@iconify/icons-akar-icons/codepen-fill";
import plus from "@iconify/icons-akar-icons/plus";
import AuthLoading from "../LoadingManger/LoadingManger";

import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../../RazorFunctions/LocalStorage";
import "../../Assets/Styles/Wizard.css";

// Wizard for Creating Projects
export function WizardCreateProject() {
    const { currentWizard } = useNext();
    const { theme } = useTheme();
    return (
        <>
            {currentWizard === "ProjectName" ? (
                <CreateProjectWizard
                    title="Create New Project"
                    subTitle="Give your project a name"
                    nextcurrentWizard={"ProjectWorkSpace"}
                />
            ) : currentWizard === "ProjectWorkSpace" ? (
                <SetProjectWizard
                    title="Your Project Workspace"
                    subTitle="Pick the editor to fit your project"
                    nextcurrentWizard={"LoadingEditorm"}
                />
            ) : currentWizard === "LoadingEditor" ? (
                <form
                    className="wizard"
                    style={{ background: theme.wizardColor }}
                >
                    <AuthLoading
                        LoadingTitle="Creating Your Editor"
                        LoadingSub="creating and adding files to target folder"
                    />
                </form>
            ) : (
                <></>
            )}
        </>
    );
}

// GET Function : To gather info form active wizard
const wizardGET = {
    key: "",
    projectName: "",
    projectWorkspace: "",
    projectColor: "",
    icon: "",
};
const PROJECT_COLOR = ["#00B2FF", "#FF006B", "#00ff75", "#FF4D00", "#FFE600"];

// Wizard Panels

// Create Project [Start]
function CreateProjectWizard(props) {
    // this guildes the user in creating their projects
    const { theme } = useTheme();
    const { setCurrentWizard, openPojectWizard } = useNext();
    const [value, setValue] = useState("");
    const [errorType, setErrorType] = useState("");

    // check and validate user input
    const HandleValue = (e) => {
        e.preventDefault();
        // Validate projectName Input
        if (value !== "") {
            setCurrentWizard("ProjectWorkSpace");
            wizardGET.projectName = value;
        } else {
            setErrorType("noInput");
        }
    };

    function closeProjectWizard() {
        openPojectWizard(false);
        wizardGET.projectName = "";
        wizardGET.projectWorkspace = "";
        console.log(wizardGET);
    }
    return (
        <form className="wizard" style={{ background: theme.wizardColor }}>
            <div
                className="wrapCreatePorject"
                style={{ background: theme.primaryColor }}
            >
                <div className="currentWizardOne">
                    <div
                        className="icon"
                        style={{
                            marginBottom: "30px",
                            display: "grid",
                            justifyContent: "center",
                        }}
                    >
                        <Icon
                            icon={codepenFill}
                            color={theme.altColor}
                            style={{
                                marginTop: "0px",
                                textAlign: "center",
                                display: "inline",
                            }}
                            height={50}
                        />
                    </div>
                    <div className="WizardTitle">
                        <h2
                            style={{
                                color: theme.textColor,
                                textAlign: "center",
                            }}
                        >
                            {props.title}
                        </h2>
                        <p
                            style={{
                                color: theme.textColor,
                                opacity: 0.6,
                                marginTop: "7px",
                                textAlign: "center",
                            }}
                        >
                            {props.subTitle}
                        </p>
                    </div>

                    <div
                        className="inputCP"
                        style={{
                            marginTop: "40px",
                            display: "grid",
                            justifyContent: "center",
                        }}
                    >
                        <SimpleInput
                            placeholder="Project Name"
                            value={value}
                            error={errorType}
                            changeFunction={(e) => {
                                setValue(e.target.value);
                                setErrorType("");
                            }}
                        />
                        <p style={{ color: "white" }}>
                            {value} is been created
                        </p>
                    </div>
                    <div
                        className="buttonCP"
                        style={{
                            marginTop: "30px",
                            display: "grid",
                            justifyContent: "center",
                        }}
                    >
                        <button
                            style={{
                                padding: "0px 30px",
                                background: theme.baseColor,
                            }}
                            onClick={HandleValue}
                             
                        >
                            <p style={{ color: "white" }}>Next</p>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="closeProjectButton"
                style={{ background: theme.primaryColor }}
                onClick={closeProjectWizard}
            >
                <Icon
                    icon={plus}
                    color={theme.altColor}
                    style={{
                        marginTop: "0px",
                        textAlign: "center",
                        display: "inline",
                        transform: "rotateZ(45deg)",
                    }}
                    height={16}
                />
            </div>
        </form>
    );
}
function SetProjectWizard(props) {
    // this guildes the user in creating their projects
    const { theme } = useTheme();
    const { changeWizard, openPojectWizard, OpenEditor, ChangeEditorTitle } =
        useNext();
    const { getSavedValue, storeThis } = useLocalStorage();
    const [errorType, setErrorType] = useState("");

    // Get and manage the data from a point
    const [userData, setUserData] = useState(getSavedValue());

    function StoreData() {
        let dataUpdate = getSavedValue();
        dataUpdate.projects.push(wizardGET);
        console.log(dataUpdate);

        storeThis(dataUpdate);
    }

    // check and validate user input
    function HandleValue(e) {
        e.preventDefault();
        // Validate projectName Input
        if (wizardGET.projectWorkspace !== "") {
            changeWizard(props.nextcurrentWizard);

            // genarates a random id for the project box
            wizardGET.key = `razorProject${Math.floor(
                Math.random() * 10
            )}${Math.floor(2 + Math.random() * 10)}${
                4 + Math.floor(Math.random() * 10)
            }${1 + Math.floor(Math.random() * 10)}`;
            // end

            wizardGET.projectColor =
                PROJECT_COLOR[Math.floor(Math.random() * PROJECT_COLOR.length)];
            StoreData();
            OpenEditor();
            ChangeEditorTitle(wizardGET.projectName);
            console.log(wizardGET);
        } else {
            setErrorType("noInput");
            console.warn("no WorkSpace")
        }
    }
    function closeProjectWizard() {
        openPojectWizard(false);
        wizardGET.projectName = "";
        wizardGET.projectWorkspace = "";
        console.log(wizardGET);
    }
    const UserWorkspaces = userData.workspace.map((a) => {
        return (
            <WorkspaceCards
                key={a.key}
                id={a.key}
                cardName={a.workspaceType}
            />
        );
    })
    return (
        <form className="wizard" style={{ background: theme.wizardColor }}>
            <div
                className="wrapCreatePorject"
                style={{ background: theme.primaryColor }}
            >
                <div className="currentWizardOne">
                    <div
                        className="icon"
                        style={{
                            marginBottom: "30px",
                            display: "grid",
                            justifyContent: "center",
                        }}
                    >
                        <Icon
                            icon={codepenFill}
                            color={theme.altColor}
                            style={{
                                marginTop: "0px",
                                textAlign: "center",
                                display: "inline",
                            }}
                            height={50}
                        />
                    </div>
                    <div className="WizardTitle">
                        <h2
                            style={{
                                color: theme.textColor,
                                textAlign: "center",
                            }}
                        >
                            {props.title}
                        </h2>
                        <p
                            style={{
                                color: theme.textColor,
                                opacity: 0.6,
                                marginTop: "7px",
                                textAlign: "center",
                            }}
                        >
                            {props.subTitle}
                        </p>
                    </div>

                    <div
                        className="inputCP"
                        style={{
                            marginTop: "40px",
                            display: "grid",
                            justifyContent: "center",
                        }}
                    >
                        <div className="wrapWorkspaceComponent">
                            <div className="wrapWorkspaceComponentsub">
                                {UserWorkspaces}
                            </div>
                        </div>
                    </div>
                    <div
                        className="buttonCP"
                        style={{
                            marginTop: "30px",
                            display: "grid",
                            justifyContent: "center",
                        }}
                    >
                        <button
                            style={{
                                padding: "0px 30px",
                                background: theme.baseColor,
                            }}
                            type="submit" 
                            onClick={HandleValue}
                        >
                            <p style={{ color: "white" }}>Next</p>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="closeProjectButton"
                style={{ background: theme.primaryColor }}
                onClick={closeProjectWizard}
            >
                <Icon
                    icon={plus}
                    color={theme.altColor}
                    style={{
                        marginTop: "0px",
                        textAlign: "center",
                        display: "inline",
                        transform: "rotateZ(45deg)",
                    }}
                    height={16}
                />
            </div>
        </form>
    );
}
function WorkspaceCards(props){
    const { theme } = useTheme();

    const notSelected = {
        border: "none",
        background: theme.projectColor,
    }
    const HandleClick = () => {
        wizardGET.projectWorkspace = props.id;
        ClearInput()
        const self = document.getElementById(props.id)
        self.style.border= `${theme.baseColor} 3px solid`
        console.log(wizardGET.projectWorkspace);
    }
    const ClearInput = ()=> {
        let relativeElement = document.getElementsByClassName("WorkspaceCard ");
        for (let i = 0; i < relativeElement.length; i++) {
            const element = relativeElement[i];
            element.style.border = "none"
        }
    }
    return (
        <span
            id={props.id}
            className="WorkspaceCard"
            style={notSelected }
            onClick={HandleClick}
        >
            <div className="wrpCardWorkSpace">
                <p style={{ color: theme.textColor }}>{props.cardName}</p>
            </div>
        </span>
    );
}
// Create Project [Stop]


// custom context hook for change of wizard
const CreateProjectManger = createContext({});
const useNext = () => useContext(CreateProjectManger);
const WizardManger = ({ children }) => {
    const [currentWizard, setCurrentWizard] = useState("");

    const [projectWizard, setProjectWizard] = useState(false);
    const [projectList, setProjectList] = useState(false);
    const [editor, setEditor] = useState(false);
    const [editorTitle, setEditorTitle] = useState("");

    const initWizard = () => {
        setCurrentWizard("ProjectName");
    };
    //for change of wizard state
    const changeWizard = (nextWizard) => {
        setCurrentWizard(nextWizard);
    };
    const openPojectWizard = (boolen) => {
        setProjectWizard(boolen);
    };
    const EmptyProject = () => {
        setProjectList(false);
    };
    const OpenEditor = () => {
        setCurrentWizard("editor");
        setEditor(true);
    };
    const ChangeEditorTitle = (title) => {
        setEditorTitle(title);
    };
    // Get Projects in  the localStorage and save as state

    const currentWizardValue = {
        currentWizard,
        setCurrentWizard,
        initWizard,
        changeWizard,
        projectWizard,
        setProjectWizard,
        openPojectWizard,
        projectList,
        setProjectList,
        EmptyProject,
        OpenEditor,
        editor,
        editorTitle,
        ChangeEditorTitle,
    };
    return (
        <CreateProjectManger.Provider value={currentWizardValue}>
            {children}
        </CreateProjectManger.Provider>
    );
};
export { WizardManger, useNext };
