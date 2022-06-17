import { useEditor } from "../../RazorFunctions/RazorEdtorContext"
import { useTheme } from "../../ThemeManger/Themes"



export function Test() {
    const {theme} = useTheme()

    return (
        <div
            className="toolChildElements"
            style={{ background: theme.toolBarChildColor }}
        >
            <p
                className="toolChildElementTitle"
                style={{ color: theme.textColor }}
            >
                Basic Elements
            </p>

            <div className="toolChildChildrenDesign">
            </div>
        </div>
    )
}