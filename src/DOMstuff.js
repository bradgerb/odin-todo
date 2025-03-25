import { myProjects } from "./projectCreator";
import { newProject } from "./formData";
import { defaultTodo, newTodo } from "./todoCreator";

const container = document.querySelector(".body");

const displayProjects = ()=>{
    let index = 0;

    for(let i = 0; i < myProjects.length; i++){

        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("larger");
        card.textContent = `Project name: ${myProjects[i].title}`;

        const addTodoButton = document.createElement("button");
        addTodoButton.setAttribute("ID", `${index}`);
        addTodoButton.classList.add("cardButton");
        addTodoButton.textContent = "Add todo";
        addTodoButton.addEventListener("click", newTodo);
        card.appendChild(addTodoButton);

        const removeProjectButton = document.createElement("button");
        removeProjectButton.setAttribute("ID", `${index}`);
        removeProjectButton.classList.add("cardButton");
        removeProjectButton.textContent = "Remove Project";
        removeProjectButton.addEventListener("click", removeProject);
        card.appendChild(removeProjectButton);

        const todos = document.createElement("div");
        todos.classList.add("todoContainer");
        // todos.textContent = `${defaultTodo}`;
        card.appendChild(todos);

        index++;

        container.appendChild(card);
    };
    console.table(myProjects[0]);
    console.table(myProjects[1]);
};

const clearCards = ()=>{
    for (let i = 0; i < myProjects.length; i++){
        container.removeChild(container.lastChild);
    };
};

function removeProject(){

    let a = this.id;

    clearCards();
    myProjects.splice(a, 1);
    displayProjects();
};

export { displayProjects, myProjects, clearCards }