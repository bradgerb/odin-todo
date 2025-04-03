import { myProjects } from "./projectCreator";
import { newProject } from "./formData";
import { newTodo } from "./todoCreator";

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

            for(let i = 0; i < myProjects[index].todos.length; i++){

                const todos = document.createElement("div");
                todos.classList.add("todoContainer");
                todos.setAttribute("ID", "lowPriority");
                
                todos.textContent = `Todo: ${myProjects[index].todos[i].title};\u00A0 \u00A0 Description: ${myProjects[index].todos[i].description}`;
                
                projectContainer.appendChild(todos);
                
            };

        container.appendChild(projectContainer);

        index++;
        
    };
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

function overlayOn() {
    document.getElementById("overlay").style.display = "flex";
};

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
};

const overlayOffButton = document.querySelector(".overlayOff");
overlayOffButton.addEventListener("click", overlayOff);

export { displayProjects, clearCards, overlayOn, overlayOff }