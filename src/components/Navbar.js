import { Link, useLocation } from "react-router-dom";
import twitter from "../dep/img/twitter.png"
import twitch from "../dep/img/twitch.png"
import youtube from "../dep/img/youtube.png"
import github from "../dep/img/github.png"
import osu from "../dep/img/osu.png"
import "./style/Navbar.css"
function Home() {
    return (useLocation().pathname === "/" ? 
        <Link to="/" className="NavbarButton" onClick={ (event) =>event.preventDefault()}>Home</Link> :
        <Link to="/" className="NavbarButton">Home</Link>
    );
}
function Skins() {
    return (useLocation().pathname === "/skins" ? 
        <Link to="/skins" className="NavbarButton" onClick={ (event) =>event.preventDefault()}>Skins</Link> :
        <Link to="/skins" className="NavbarButton">Skins</Link>
    );
}
function Navbar() {
    return (
        <div className="Navbar">
            <div className="NavbarContainer">
                <div className="NavbarBadge">
                    Monko2k
                </div>
                <Home />
                <Skins />
            </div>
            <div className="NavbarContainer">
                <a href="https://twitter.com/Monko2k">
                    <img src={twitter} className="NavbarIcon" alt="Twitter"/>
                </a>
                <a href="https://www.twitch.tv/monko2k">
                    <img src={twitch} className="NavbarIcon" alt="Twitch" />
                </a>
                <a href="https://www.youtube.com/c/monko2k">
                    <img src={youtube} className="NavbarIcon" alt="youtube" />
                </a>
                <a href="https://github.com/Monko2k">
                    <img src={github} className="NavbarIcon" alt="github" />
                </a>
                <a href="https://osu.ppy.sh/users/4852013">
                    <img src={osu} className="NavbarIcon" alt="osu" />
                </a>
            </div>
        </div>
    )
}

export default Navbar;