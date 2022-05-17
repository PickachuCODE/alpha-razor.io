import { useAuthContext } from "../../Firebase/AuthContext";
import Pages from "../../Pages/pages";
import { useLocalStorage } from "../../RazorFunctions/LocalStorage";
import { useTheme } from "../../ThemeManger/Themes";
import "../../Assets/Styles/Dashboard.css"
import { useNext } from "./WizardManger";
// const { ipcRenderer } = window.require('electron');

// const renderIPC = ipcRenderer
export default function DashBoard() {
    const { editor, editorTitle } = useNext();
    const { theme } = useTheme();
    const {logOutUser} = useAuthContext()
    function test() {
        // renderIPC.send("closeApp")
    }
    return (
        <>
            <div
                //for first time loading of the hub
                //this is give the user offline acess to the hub
                // onLoad={InitUser}
                className="dashTop"
                style={{ background: theme.primaryColor }}
            >
                <div className="wrapLogo">
                    <img className="hub2logo" src={theme.themeLogo} alt="" />
                </div>
                <div className="projectTitleHolder">
                    {editor ? (
                        <p
                            className="projectTitle"
                            style={{ color: theme.textColor }}
                            onChange={console.log("moo")}
                        >
                            {
                                (document.getElementsByTagName(
                                    "title"
                                )[0].innerText = `${editorTitle} -Razor Editor`)
                            }
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="sidestuff">
                    <div className="userSection">
                        <div className="userBox" onClick={logOutUser}>
                            <h2 style={{ color: theme.textColor }}>{"Am"}</h2>
                        </div>
                    </div>
                    <div className="toolBttn">
                        <span
                            className="toolBttn-Link"
                            style={{
                                color: theme.textColor,
                                paddingBottom: "2px",
                            }}
                        >
                            &minus;
                        </span>
                        <span
                            className="toolBttn-Link"
                            style={{ color: theme.textColor }}
                            onClick={test}
                        >
                            &#10006;
                        </span>
                    </div>
                </div>
            </div>
            <Pages />
        </>
    );
}

