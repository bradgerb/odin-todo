const myTodos = [];

class Todo {
    constructor (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };

    addTodo(todoName){
        myTodos.push(todoName);
    };
};

// const defaultTodo = (function(){
    const placeholderTodo = new Todo("Default", "This is where your list of todos goes", "Now", "low");
//     placeholderTodo.addTodo(placeholderTodo);
// })();

const newTodo = ()=>{
    const newTodo = new Todo(prompt("Title"), prompt("Description"), prompt("Due Date"), prompt("Priority"));
    newTodo.addTodo(newTodo);
};

export {newTodo, placeholderTodo};