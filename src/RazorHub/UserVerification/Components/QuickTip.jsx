import { useTheme } from '../../../ThemeManger/Themes';
import '../../../Assets/Styles/RazorHub.min.css'
function SignTip (props) {
    const { theme } = useTheme();
    
    return (
        <div className="TipInfo-Hero">
            <h2 className="Header-Tip" style={{color : theme.textColor}}>{ props.title }</h2>
            <p className="content-Tip" style={{ color: theme.textColor, paddingTop: '5px', opacity: '0.8', }}>{props.sub}</p>
        </div>
    )
}

function LoadingTip (props) {
    const { theme } = useTheme();
    const StyleHeaderLoad = {
        color: theme.textColor,
    };
    return (
        <div className="TipInfo-Hero">
            <p
                className="content-Tip-Loading"
                style={{
                    color: theme.textColor,
                    paddingTop: "15px",
                    opacity: "0.8",
                }}
            >
                {props.sub}
            </p>
            <h2 className="Header-Tip-Loading" style={StyleHeaderLoad}>
                {props.title}
            </h2>
        </div>
    );
}

export {LoadingTip, SignTip}