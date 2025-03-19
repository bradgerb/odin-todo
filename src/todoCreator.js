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

const newTodo = ()=>{
    const newTodo = new Todo(prompt("Title"), prompt("Description"), prompt("Due Date"), prompt("Priority"));
    newTodo.addTodo(newTodo);
};

export {myTodos, newTodo};