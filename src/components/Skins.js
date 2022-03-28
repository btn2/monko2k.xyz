import SkinComponent from "./SkinComponent";
import skinsdata from "../dep/skins.json";
import "./style/Skins.css";

function Skins() {
    let skins = [];
    for (let i = 0; i < skinsdata.skins.length; i++) {
        skins.push(<SkinComponent key={i} data={skinsdata.skins[i]}/>)
    }
    skins = skins.reverse()
    return (
        <div className="Skins">
            {skins}
        </div>
    )
}

export default Skins;