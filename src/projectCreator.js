import { displayProjects, clearCards } from "./DOMstuff";
import { placeholderTodo } from "./todoCreator";

const myProjects = [];

class Project {
    constructor (title, todos){
        this.title = title;
        this.todos = todos;
    };

    addProject(projectName){
        myProjects.push(projectName);
    };
};

const defaultProject = (function(){
    let todos = [placeholderTodo];

    const placeholderProject = new Project("Placeholder", todos);
    placeholderProject.addProject(placeholderProject);
})();

function removeProject(){
    clearCards();
    myProjects.splice(this.id, 1);
    displayProjects();
};

const newProjectForm = document.getElementById("newProjectForm")

newProjectForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const projectFormData = new FormData(newProjectForm);

    let todoList = [];
    
    const newProject = new Project(projectFormData.get("projectName"), todoList);

    clearCards();
    newProject.addProject(newProject);
    displayProjects();
});

export { myProjects, removeProject };
