import { displayProjects, clearCards, overlayOn, overlayOff } from "./DOMstuff";
import { myProjects } from "./projectCreator";
import { format, parseISO } from "date-fns";

let currentProjectIndex = 0;

class Todo {
    constructor (title, description, dueDate, priority, completed, descriptionOpen){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.descriptionOpen = descriptionOpen;
    };

    addTodo(todoName){
        myProjects[currentProjectIndex].todos.push(todoName);
    };
};

const placeholderTodo = new Todo("Default", "Add some more todos.", "Now", "low", false, false);

function newTodo(){
    currentProjectIndex = this.id;
    overlayOn();
};

function removeTodo(i, j){
    clearCards();
    myProjects[i].todos.splice(j, 1);
    displayProjects();
};

const newTodoForm = document.getElementById("newTodoForm")

newTodoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const todoFormData = new FormData(newTodoForm);
        const newTodo = new Todo(todoFormData.get("todoName"), todoFormData.get("todoDescription"), format(parseISO(todoFormData.get("todoDue")), "MM/dd/yyyy"), todoFormData.get("priority"), false, false);
        clearCards();
        newTodo.addTodo(newTodo);
        displayProjects();
        overlayOff();
});

export { placeholderTodo, newTodo, removeTodo };
