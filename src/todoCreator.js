import { myProjects } from "./projectCreator";
import { clearCards, displayProjects } from "./DOMstuff";

const myTodos = [];

class Todo {
    constructor (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

const placeholderTodo = new Todo("Default", "Add some more todos", "Now", "low");

function newTodo(){

    let index = this.id;
    console.log(index);

    const newTodo = new Todo(prompt("Title"), prompt("Description"), prompt("Due Date"), prompt("Priority"));
    clearCards();
    myProjects[index].todos.push(newTodo);
    displayProjects();
};

export {newTodo, placeholderTodo};