import "./style/SkinComponent.css"
function SkinComponent(props) {
    return (
        <div 
            className="SkinComponent" 
            onClick={() => window.open(props.data.download, "_self")}
            >
            <div className="SkinHeader"> 
                <div className="SkinName">{props.data.name}</div>
                <div className="SkinVersion">{props.data.ver}</div>
                <div className="SkinYear">{props.data.year}</div>
            </div>

            <img 
                className="SkinPreview" 
                src={`/preview/skin${props.data.id}.jpg`}
                alt={props.data.name}
                /> 
        </div>
    )
}

export default SkinComponent;