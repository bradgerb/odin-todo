import { myProjects, removeProject } from "./projectCreator";
import { newTodo, removeTodo } from "./todoCreator";
import trash from "./img/trash.svg"

const container = document.querySelector(".body");

const displayProjects = ()=>{

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
                        addTodoButton.setAttribute("ID", `${i}`);
                        addTodoButton.classList.add("cardButton");
                        addTodoButton.textContent = "Add todo";
                        addTodoButton.addEventListener("click", newTodo);
                        buttonContainer.appendChild(addTodoButton);

                        const removeProjectButton = document.createElement("button");
                        removeProjectButton.setAttribute("ID", `${i}`);
                        removeProjectButton.classList.add("cardButton");
                        removeProjectButton.textContent = "Remove Project";
                        removeProjectButton.addEventListener("click", removeProject);
                        buttonContainer.appendChild(removeProjectButton);

                    card.appendChild(buttonContainer);

                cardContainer.appendChild(card);

            projectContainer.appendChild(cardContainer);

            for(let j = 0; j < myProjects[i].todos.length; j++){

                const todos = document.createElement("div");
                todos.classList.add("todoContainer");
                if(myProjects[i].todos[j].priority === "low"){
                    todos.setAttribute("ID", "lowPriority");
                } else if(myProjects[i].todos[j].priority === "medium"){
                    todos.setAttribute("ID", "mediumPriority")
                } else todos.setAttribute("ID", "highPriority");
                todos.textContent = `Todo: ${myProjects[i].todos[j].title};\u00A0 \u00A0 Due: ${myProjects[i].todos[j].dueDate}`;

                const todoButtons = document.createElement("div");
                todoButtons.classList.add("todoButtonContainer");

                    const trashButton = document.createElement("img");
                    trashButton.setAttribute("ID", j);
                    trashButton.src = trash;
                    trashButton.style.height = "18px";
                    trashButton.addEventListener("click", ()=>{removeTodo(i, j)});
                    todoButtons.appendChild(trashButton);

                todos.appendChild(todoButtons);
                
                projectContainer.appendChild(todos);
                
            };

        container.appendChild(projectContainer);
        
    };
};

const clearCards = ()=>{
    for (let i = 0; i < myProjects.length; i++){
        container.removeChild(container.lastChild);
    };
};

function overlayOn() {
    document.getElementById("overlay").style.display = "flex";
};

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
};

const overlayOffButton = document.querySelector(".overlayOff");
overlayOffButton.addEventListener("click", overlayOff);

export { displayProjects, clearCards, overlayOn, overlayOff }
