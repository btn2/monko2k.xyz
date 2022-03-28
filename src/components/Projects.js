import ProjectComponent from "./ProjectComponent";
import projectdata from "../dep/projects.json";
import "./style/Projects.css";

function Projects() { 
    let projects = [];
    for (let i = 0; i < projectdata.projects.length; i++) {
        projects.push(<ProjectComponent key={i} data={projectdata.projects[i]} />)
    }
    projects = projects.reverse()
    return (
        <div className="Projects">
            {projects}
        </div>
    )
}
