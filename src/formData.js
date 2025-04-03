import { displayProjects, clearCards, overlayOff } from "./DOMstuff";
import { Project } from "./projectCreator"
import { Todo, currentIndex } from "./todoCreator";
import { myProjects } from "./projectCreator";

const newProjectForm = document.getElementById("newProjectForm")

newProjectForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(newProjectForm);

    let todoList = [];
    
    const newProject = new Project(formData.get("projectName"), todoList);

    clearCards();
    newProject.addProject(newProject);
    displayProjects();
});

const newTodoForm = document.getElementById("newTodoForm")

newTodoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let index = currentIndex

    const todoFormData = new FormData(newTodoForm);

    for (let key of todoFormData){
        console.log(key);
    };

        const newTodo = new Todo(todoFormData.get("todoName"), "description", todoFormData.get("projectDue"), todoFormData.get("priority"));
        clearCards();
        myProjects[index].todos.push(newTodo);
        console.table(myProjects[index].todos);
        displayProjects();
        overlayOff();
});

export { newTodoForm };