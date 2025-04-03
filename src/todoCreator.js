import { myProjects } from "./projectCreator";
import { clearCards, displayProjects } from "./DOMstuff";
import { newTodoForm } from "./formData";
import { overlayOn } from "./DOMstuff";

const myTodos = [];
let currentIndex = 0;

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

    currentIndex = this.id;
    console.log(currentIndex);
    
    overlayOn();


    // let index = this.id;
    // console.log(index);

    // let todoForm = newTodoForm
    // console.log(todoForm);

    // // const newTodo = new Todo(prompt("Title"), prompt("Description"), prompt("Due Date"), prompt("Priority"));
    // const newTodo = new Todo(todoForm.get("todoName"), "description", todoForm.get("projectDue"), todoForm.get("priority"));
    // clearCards();
    // myProjects[index].todos.push(newTodo);
    // displayProjects();
};

export {newTodo, placeholderTodo, Todo, currentIndex};