import React from "react";
import { RecButton } from "../../../Assets/Buttons";
import { useAuthContext } from "../../../Firebase/AuthContext";

import { Icon } from "@iconify/react";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import { useTheme } from "../../../ThemeManger/Themes";

export default function SignCollectInfo(props) {
    const { theme } = useTheme();
    const Style = {
        inputStyle: {
            color: theme.textColor,
        },
    };
    return (
        <div className="InfoBox">
            {props.inputType === "Username Only" ? (
                <UserNameOnly styleInput={Style.inputStyle} />
            ) : props.inputType === "VerifyOTP" ? (
                <VerifyOTP />
            ) : (
                "null"
            )}
        </div>
    );
}

function UserNameOnly(props) {
    const { signWithGitHub } = useAuthContext();

    return (
        <div className="Usernamebox">
            <RecButton
                iconImage={<Icon icon={githubFill} color="white" height="25" inline={true} />}
                btnText="Use GitHub"
                perform={signWithGitHub}
            />
        </div>
    );
}

function VerifyOTP() {
    
}

