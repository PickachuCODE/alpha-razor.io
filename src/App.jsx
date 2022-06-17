// importing custom hooks for state management

import React, { useState } from "react";
import "./Assets/Styles/RazorHub.min.css";
import { useTheme } from "./ThemeManger/Themes.js";

import logoMain from "./Assets/Logos/razorLogo.svg";

import AuthLoading from "./RazorHub/LoadingManger/LoadingManger";
import { useAuthContext } from "./Firebase/AuthContext";
import DashBoard from "./RazorHub/HubManger/DashBoard";
import { SignIn } from "./RazorHub/UserVerification/SignInManger";
import { useLocalStorage } from "./RazorFunctions/LocalStorage";

// saving template in local storage
// all offline data should be stored online
const userInfo = {
    user: null,
    projects: [],
    plugins: [],
    workspace: [
        {
            key:"razorTextEditor",
            workspaceType: "TextEditor",
            editorConfigs: {}
        },
        {
            key:"razorWebBuilder",
            workspaceType: "WebEditor",
            editorConfigs: {}
        }
    ],
};

function LoadHub() {
    const { theme } = useTheme();
    const [ready, setReady] = useState(false);
    const { authLoading, localUser } = useAuthContext();
    const { storeThis, getSavedValue } = useLocalStorage();
    const projectData = getSavedValue();

    // setting up new data for new systems in the local storage
    // Set up an express.js server to handle calls
    if (projectData === undefined || projectData === null) {
        storeThis(userInfo);
        console.log("Local storage is ready");
        console.log(projectData);
    }

    // pre loading and data check
    function clearLogo() {
        var a = setInterval(() => {
            document
                .getElementById("MainLogo")
                .classList.add("logoMain-Animation-clearLogo");
            clearInterval(a);
        }, 5000);
        var b = setInterval(() => {
            document.getElementById("MainLogoHolder").style.display = "none";
            setReady(true);
            clearInterval(b);
        }, 5500);
    }
    const Styles = {
        HubBody: {
            background: theme.primaryColor,
        },
    };

    return (
        <div className="HubBody" style={Styles.HubBody}>
            <div
                className="LogoMainHolder"
                id="MainLogoHolder"
                onLoad={clearLogo}
            >
                <img
                    src={logoMain}
                    alt=""
                    className="LogoMainHolder-img"
                    id="MainLogo"
                />
            </div>
            {ready ? (
                authLoading ? (
                    <AuthLoading
                        LoadingTitle={"Signing you in"}
                        LoadingSub={
                            "seting up your profile from your github account"
                        }
                    />
                ) : (
                    <> {localUser ? <DashBoard/> : <SignIn />}</>
                    
                )
            ) : (
                <>o</>
            )
            }
        </div>
    );
}

export { LoadHub };
