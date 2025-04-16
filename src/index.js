import "./styles.css";
import { displayProjects } from "./DOMstuff";
import { myProjects } from "./projectCreator";
import { getProjects } from "./localStorage";

let checkProjects;

if(localStorage.getItem("myProjects")) {
    checkProjects = getProjects();
};
displayProjects();

export { checkProjects };
