import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RazorEditor from "../../RazorEditor/RazorEditor";
import { useLocalStorage } from "../../RazorFunctions/LocalStorage";
import { useTheme } from "../../ThemeManger/Themes";
import { useNext, WizardCreateProject } from "./WizardManger";
import plus from "@iconify/icons-akar-icons/plus";
import trashCan from "@iconify/icons-akar-icons/trash-can";
import { InputSearch } from "../../Assets/Inputs";

export function MyProjects() {
    const { theme } = useTheme();
    const {
        initWizard,
        projectWizard,
        openPojectWizard,
        projectList,
        setProjectList,
        editor,
    } = useNext();
    const { getSavedValue, storeThis } = useLocalStorage();
    const [userProject, setUserProjects] = useState(getSavedValue());
    // calling a side effect to update the data to the project board
    useEffect(() => {
        if (userProject.projects.length === 0) {
            setProjectList(false);
        } else {
            if (userProject.projects !== []) {
                setProjectList(true);
            }
        }
        return updateData();
        
    }, [userProject.projects.length, userProject, userProject.projects, setProjectList]);
    
    
    const style = {
        color: theme.textColor,
    };
    function newProject() {
        openPojectWizard(true);
        initWizard();
    }

    const Plusstyle = {
        marginTop: "0px",
        textAlign: "center",
        display: "inline",
    };
    function updateData() {
        let dataUpdate = getSavedValue();
        dataUpdate = userProject;
        storeThis(dataUpdate);
        console.log("Updated");
    }
    const userProjects = userProject.projects.map((a) => {
        return (
            <ProjectBox
                key={a.key}
                id={a.key}
                projectName={a.projectName}
                iconColor={a.projectColor}
                iconImage={a.icon}
                getData={userProject}
                setData={setUserProjects}
            />
        );
    });

    return (
        <div className="Dashboard" style={{ background: theme.hubSecColor }}>
            {projectWizard ? <WizardCreateProject /> : <></>}
            {editor ? <RazorEditor /> : <></>}
            <div className="projects" style={{ background: theme.hubSecColor }}>
                <div
                    className="DashContainer"
                    style={{ background: theme.primaryColor }}
                >
                    <div className="leftDC">
                        <div className="info-leftDC">
                            <h1 className="DcHeader" style={style}>
                                My Projects
                            </h1>
                            <p className="DcSub" style={style}>
                                manage or create a new project here
                            </p>
                            <div className="links-DC">
                                <div
                                    className="linkBox-DC"
                                    style={{ margin: "10px 15px 10px 0px" }}
                                >
                                    <Link to="/MyPlugins" style={style}>
                                        Plugins
                                    </Link>
                                </div>
                                <div className="linkBox-DC">
                                    <a href="#" style={style}>
                                        Community
                                    </a>
                                </div>
                                <div className="linkBox-DC">
                                    <a href="#" style={style}>
                                        Marketplace
                                    </a>
                                </div>
                                <div className="linkBox-DC">
                                    <a href="#" style={style}>
                                        Learn
                                    </a>
                                </div>
                                <div className="linkBox-DC">
                                    <a href="#" style={style}>
                                        Framework
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* //convert this to a separate component */}
                    <div className="rightDC"></div>
                </div>

                <div className="projectsWrap" id="projectsWrap">
                    {projectList ? userProjects : <NoProjects />}
                    <div
                        className="addProjectButton"
                        style={{ background: theme.primaryColor }}
                        onClick={newProject}
                    >
                        <Icon
                            icon={plus}
                            color={theme.altColor}
                            style={Plusstyle}
                            height={16}
                        />
                    </div>
                </div>
            </div>
            {/* <Outlet /> */}
        </div>
    );
}

function NoProjects() {
    const { theme } = useTheme();

    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "45%",
                // marginTop: "50%",
                display: "grid",
                alignItems: "flex-end",
                opacity: 0.5,
            }}
        >
            <div>
                <h1 style={{ color: theme.altColor, textAlign: "center" }}>
                    Nothing Here
                </h1>
                <p style={{ color: theme.altColor, textAlign: "center" }}>
                    click the plus sign to create a new project
                </p>
            </div>
        </div>
    );
}

function getProjectName(a) {
    var twoLetters = [];
    for (let i = 0; i < 5; i++) {
        if (a[i] !== " ") {
            twoLetters.push(a[i]);
        }
    }
    var value = `${twoLetters.slice(0, 1)}${twoLetters.slice(1, 2)}`;
    return value.toUpperCase();
}

function ProjectBox(props) {
    const { theme } = useTheme();
    const { EmptyProject, OpenEditor, ChangeEditorTitle } = useNext();
    let project = props.getData;
    let setProject = props.setData;
    const style = {
        background: theme.projectColor,
    };
    const openProject = () => {
        OpenEditor();
        console.log(GetProjectInfo());
        ChangeEditorTitle(GetProjectInfo())
        console.log("ready project");
    };
    const openOption = () => {
        var parent = document.getElementById(props.id);
        parent.children[1].style.display = "grid";
    };
    const closeOption = () => {
        var parent = document.getElementById(props.id);
        parent.children[1].style.display = "none";
    };
    const handleRightClick = (e) => {
        openOption();
    };

    const DeleteBox = () => {
        document.getElementById(props.id).style.display = "none";
    console.log(project);
        const indexProject = () => {
            for (let i = 0; i < project.projects.length; i++) {
                const element = project.projects[i];
                if (element.key === props.id && i !== 0) {
                    project.projects.splice(i, i);
                    console.log(project.projects);
                    EmptyProject();
                    return project.projects;

                } else {
                    if (element.key === props.id && i === 0) {
                        project.projects.splice(0, 1);
                        EmptyProject();
                        return project.projects;
                    }
                }
            }
        };
        let dataUpdate = project;
        dataUpdate.projects = indexProject();
        setProject(dataUpdate);
        setProject(dataUpdate);
    };
    const GetProjectInfo = () => {
        const indexName = () => {
            for (let i = 0; i < project.projects.length; i++) {
                const element = project.projects[i];
                if (element.key === props.id) {
                    return element.projectName;
                }
            }
        }
        
        return indexName()
    };
    return (
        <div
            id={props.id}
            className="projectContent"
            onContextMenu={handleRightClick}
            onDoubleClick={openProject}
            onMouseLeave={closeOption}
        >
            <div className="projectBoxes">
                <div
                    className="boxIconWrap"
                    style={
                        props.iconImage === undefined || props.iconImage === ""
                            ? { background: theme.projectColor }
                            : { background: props.iconColor }
                    }
                >
                    <div
                        className="iconProject"
                        style={{ background: props.iconColor }}
                    >
                        {props.iconImage === undefined ||
                        props.iconImage === "" ? (
                            <h2>{getProjectName(props.projectName)}</h2>
                        ) : (
                            <img
                                className="imageWrap"
                                src={props.iconImage}
                                alt=""
                            />
                        )}
                    </div>
                </div>
                <div
                    className="boxInfo"
                    style={{ background: theme.projectColorSecond }}
                >
                    {" "}
                    <div className="boxnfowrap">
                        <h2
                            style={{
                                fontSize: "13px",
                                fontWeight: "200",
                                color: theme.textColor,
                            }}
                        >
                            {props.projectName}
                        </h2>
                        <p
                            style={{
                                opacity: "0.6",
                                fontSize: "11px",
                                color: theme.textColor,
                                paddingTop: "8px",
                            }}
                        >
                            2 hours ago
                        </p>
                    </div>
                </div>
            </div>

            <div className="options" id={"unique"}>
                <div className="opBox">
                    <div
                        className="wrapOpBox"
                        id="wrapOpBox"
                        style={style}
                        onClick={DeleteBox}
                    >
                        <Icon
                            icon={trashCan}
                            style={{
                                marginTop: "0px",
                                textAlign: "center",
                                display: "inline",
                                color: theme.altColor,
                            }}
                            height={16}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
