import "./style/ProjectComponent.css"
function ProjectComponent(props) {
    return (
        <div
            className="ProjectComponent"
            onClick={() => window.open(props.data.link, "_self")}
            >
            <div className="ProjectHeader">
                <div className="ProjectName">{props.data.name}</div>
                <div clsasName="ProjectYear">{props.data.year}</div>
            </div>

            <img
                className="ProjectPreview"
                src={`/preview/project${props.data.id}.jpg`}
                alt={props.data.name}
                />
            <div className="ProjectDesc">{props.data.desc}</div>

        </div>
    )
}