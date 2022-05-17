import { createContext, useContext, useState } from "react";
import LogoLight from "../Assets/Logos/razorLogo2-Dark.svg";
import LogoDark from "../Assets/Logos/razorLogo2-Light.svg";

const ThemeContext = createContext({})
const useTheme = () => useContext(ThemeContext)

const ThemeContextProvider = ({ children }) => {
    const [theme, currentTheme] = useState(DefaultThemes.DarkTheme)

    const themeValues = {
        theme,
        currentTheme,
    }
    return (<ThemeContext.Provider value={themeValues}>{children}</ThemeContext.Provider>)
}


// defualt system themes
const DefaultThemes = {
    DarkTheme: {
        type: 'DarkTheme',
        logoType: 'Dark',
        baseColor: '#2BEA6C',
        primaryColor: '#000000',
        secondaryColor: '#272727',
        taskBarColor: '#3A3A3A',
        altColor: '#ffffff',
        textColor: '#ffffff',
        hubSecColor: '#131313',
        wizardColor: '#131313bf',
        projectColor: '#202020',
        projectColorSecond: '#333333',
        themeLogo: LogoDark
    },

    LightTheme: {
        type: 'LightTheme',
        logoType: 'Light',
        baseColor: '#2BEA6C',
        primaryColor: '#ffffff',
        secondaryColor: '#DDDDDD',
        taskBarColor: '#A8A8A8',
        altColor: '#000',
        textColor: '#000000',
        hubSecColor: '#131313',
        projectColor: '#e7e7e7',
        projectColorSecond: '#292929',
        themeLogo: LogoLight,
        wizardColor: '#cdcdcdbf',
    }
}

export { ThemeContextProvider, useTheme }
