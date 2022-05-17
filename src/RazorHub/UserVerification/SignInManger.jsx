import SignCollectInfo from "./Components/GetInfo";
import {SignTip} from "./Components/QuickTip";
import { useTheme } from "../../ThemeManger/Themes";
import { useLocalStorage } from "../../RazorFunctions/LocalStorage";
import { useAuthContext } from "../../Firebase/AuthContext";


// handles the loging of the user
function SignIn() {
    const { theme} = useTheme();
    // const { storeThis, getSavedValue } = useLocalStorage();
    // const {user} = useAuthContext()
    // function InitUser() {
    //     let dataUpdate = getSavedValue();
    //     if (dataUpdate.user === null) {
    //         dataUpdate.user = user;
    //         console.log(dataUpdate.user);
    //         storeThis(dataUpdate);
    //     }
    // }
    return (
        <div className="razor_Signin_Hero" id="SignIn-Hub">
            <div className="signIn_Container">
                <div className="signIn_Container_Hero">
                    <div className="subImageLogo-Razor">
                        <img
                            className="Logo2"
                            src={theme.themeLogo}
                            alt="{theme.logoType} Logo"
                        />
                    </div>
                    <SignTip
                        title="Welcome to Razor"
                        sub="Sign in with Github to proceed "
                    />
                    <SignCollectInfo inputType="Username Only" />
                </div>
            </div>
        </div>
    );
}

export {SignIn}