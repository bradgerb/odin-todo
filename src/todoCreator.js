import { displayProjects, clearCards, overlayOn, overlayOff } from "./DOMstuff";
import { myProjects } from "./projectCreator";

let currentIndex = 0;

class Todo {
    constructor (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };

    addTodo(todoName){
        myProjects[currentIndex].todos.push(todoName);
    };
};

const placeholderTodo = new Todo("Default", "Add some more todos", "Now", "low");

function newTodo(){

    currentIndex = this.id;
    console.log(currentIndex);
    
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

        const newTodo = new Todo(todoFormData.get("todoName"), "description", todoFormData.get("projectDue"), todoFormData.get("priority"));
        clearCards();
        newTodo.addTodo(newTodo);
        displayProjects();
        overlayOff();
});

export { Todo, placeholderTodo, newTodo, removeTodo };