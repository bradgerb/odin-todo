import { displayProjects, clearCards } from "./DOMstuff";
import { Project } from "./projectCreator"
import { newTodo } from "./todoCreator";

const newProjectForm = document.getElementById("newProjectForm")

newProjectForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(newProjectForm);
    
    const newProject = new Project(formData.get("projectName"), newTodo);

    clearCards();
    newProject.addProject(newProject);
    displayProjects();
});
    

// export { newProject };