import { myProjects } from "./projectCreator";
import { newProject } from "./formData";
import { defaultTodo, newTodo } from "./todoCreator";

const container = document.querySelector(".body");

const displayProjects = ()=>{
    let index = 0;

    for(let i = 0; i < myProjects.length; i++){

        const projectContainer = document.createElement("div");
        projectContainer.classList.add("projectContainer");

            const cardContainer = document.createElement("div");
            cardContainer.classList.add("cardContainer");

                const card = document.createElement("div");
                card.classList.add("card");
                card.classList.add("larger");
                card.textContent = `Project name: ${myProjects[i].title}`;

                    const buttonContainer = document.createElement("div");
                    buttonContainer.classList.add("buttonContainer");
                
                        const addTodoButton = document.createElement("button");
                        addTodoButton.setAttribute("ID", `${index}`);
                        addTodoButton.classList.add("cardButton");
                        addTodoButton.textContent = "Add todo";
                        addTodoButton.addEventListener("click", newTodo);
                        buttonContainer.appendChild(addTodoButton);

                        const removeProjectButton = document.createElement("button");
                        removeProjectButton.setAttribute("ID", `${index}`);
                        removeProjectButton.classList.add("cardButton");
                        removeProjectButton.textContent = "Remove Project";
                        removeProjectButton.addEventListener("click", removeProject);
                        buttonContainer.appendChild(removeProjectButton);

                    card.appendChild(buttonContainer);

                cardContainer.appendChild(card);

            projectContainer.appendChild(cardContainer);

            const todos = document.createElement("div");
            todos.classList.add("todoContainer");
            todos.setAttribute("ID", "lowPrio");
            todos.textContent = `${myProjects[index].todos.title}`;
            projectContainer.appendChild(todos);

        container.appendChild(projectContainer);

        index++;

        
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