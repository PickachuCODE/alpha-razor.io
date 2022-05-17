import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeManger/Themes";

export function MyPlugins() {
    const { theme } = useTheme();
    const style = {
        color: theme.textColor,
    };

    return (
        <div className="Dashboard" style={{ background: theme.hubSecColor }}>
            <div className="projects">
                <div
                    className="DashContainer"
                    style={{ background: theme.primaryColor }}
                >
                    <div className="leftDC">
                        <div className="info-leftDC">
                            <h1 className="DcHeader" style={style}>
                                My Plugins
                            </h1>
                            <p className="DcSub" style={style}>
                                make your work much easier with plugins
                            </p>
                            <div className="links-DC">
                                <div
                                    className="linkBox-DC"
                                    style={{ margin: "10px 15px 10px 0px" }}
                                >
                                    <Link to="/" style={style}>
                                        Projects
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

                <div className="projectsWrap">Plugins</div>
            </div>
        </div>
    );
}
