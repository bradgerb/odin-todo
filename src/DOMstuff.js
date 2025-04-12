import { myProjects, removeProject } from "./projectCreator";
import { newTodo, removeTodo } from "./todoCreator";
import { format, parseISO, isBefore } from "date-fns";
import trash from "./img/trash.svg";

let editProjectIndex;
let editTodoIndex;
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

                const todoWrapper = document.createElement("div");

                    const todos = document.createElement("div");
                    todos.classList.add("todoContainer");
                    if(myProjects[i].todos[j].priority === "low"){
                        todoWrapper.setAttribute("id", "lowPriority");
                    } else if(myProjects[i].todos[j].priority === "medium"){
                        todoWrapper.setAttribute("id", "mediumPriority")
                    } else todoWrapper.setAttribute("id", "highPriority");

                    const todoText = document.createElement("div");
                    todoText.classList.add("todoText");
                    todoText.textContent = `Todo: ${myProjects[i].todos[j].title};\u00A0 \u00A0 Due: ${myProjects[i].todos[j].dueDate}`;
                    todos.appendChild(todoText);

                        const todoPastDue = document.createElement("div");
                        todoPastDue.classList.add("pastDue");
                        function checkPastDue(){
                            let formattedDate = format(Date.now(), "MM/dd/yyyy");
                            if (isBefore(myProjects[i].todos[j].dueDate, formattedDate)){
                                todoPastDue.textContent = " PAST DUE";
                            };
                        };
                        checkPastDue();
                        todos.appendChild(todoPastDue);

                    const todoButtons = document.createElement("div");
                    todoButtons.classList.add("todoButtonContainer");

                        const prioritySelectorText = document.createElement("div");
                        prioritySelectorText.textContent = "Priority: ";
                        todoButtons.appendChild(prioritySelectorText);

                            const prioritySelector = document.createElement("select")
                            prioritySelector.setAttribute("type", "select");
                            prioritySelectorText.appendChild(prioritySelector);

                                let priorityOptions = ["Low", "Medium", "High"];
                                for (let i = 0; i < priorityOptions.length; i++){
                                    let option = document.createElement("option");
                                    option.value = priorityOptions[i];
                                    option.text = priorityOptions[i];
                                    prioritySelector.appendChild(option);
                                };

                            if (todoWrapper.id === "lowPriority"){
                                prioritySelector.selectedIndex = 0;
                            } else if(todoWrapper.id === "mediumPriority"){
                                prioritySelector.selectedIndex = 1;
                            } else{
                                prioritySelector.selectedIndex = 2;
                            };

                            prioritySelector.addEventListener("click", (e)=>{
                                e.stopPropagation();
                                if (prioritySelector.value === "Low"){
                                    todoWrapper.id = "lowPriority";
                                    myProjects[i].todos[j].priority = "low";
                                } else if(prioritySelector.value === "Medium"){
                                    todoWrapper.id = "mediumPriority";
                                    myProjects[i].todos[j].priority = "medium";
                                } else {
                                    todoWrapper.id = "highPriority";
                                    myProjects[i].todos[j].priority = "high";
                                };
                            }, true);
                            
                        const completedButtonText = document.createElement("div");
                        completedButtonText.textContent = "Completed:";
                        todoButtons.appendChild(completedButtonText);

                            const completedButton = document.createElement("input");
                            completedButton.setAttribute("type", "checkbox");
                            completedButton.setAttribute("ID", j);

                            function todoComplete(){
                                todoPastDue.textContent = "";
                                    todoText.style.textDecoration = "line-through";
                                    todoWrapper.classList.add("completedPriority");
                            };

                            if (myProjects[i].todos[j].completed === true){
                                completedButton.checked = true;
                                todoComplete();
                            };

                            completedButton.addEventListener("click", (e) => {
                                e.stopPropagation();
                                if (myProjects[i].todos[j].completed === false) {
                                    todoComplete();
                                    myProjects[i].todos[j].completed = true;
                                } else {
                                    checkPastDue();
                                    todoText.style.textDecoration = "none";
                                    todoWrapper.classList.remove("completedPriority");
                                    myProjects[i].todos[j].completed = false;
                                };
                            }, true);
                            completedButtonText.appendChild(completedButton);

                        const trashButton = document.createElement("img");
                        trashButton.setAttribute("ID", j);
                        trashButton.src = trash;
                        trashButton.style.height = "18px";
                        trashButton.addEventListener("click", ()=>{removeTodo(i, j)});
                        todoButtons.appendChild(trashButton);

                    todos.appendChild(todoButtons);

                    todoWrapper.appendChild(todos);

                    const todoDescription = document.createElement("div");
                    todoDescription.classList.add("todoDescription");
                    todoDescription.innerText = 
                        `Description:
                        ${myProjects[i].todos[j].description}
                        
                        `;
                    if (myProjects[i].todos[j].descriptionOpen === false){
                        todoDescription.style.display = "none";
                    };

                        const todoDescriptionEditButton = document.createElement("button");
                        todoDescriptionEditButton.textContent = "Edit";
                        todoDescriptionEditButton.setAttribute("id", i);
                        todoDescriptionEditButton.value = j;
                        todoDescriptionEditButton.addEventListener("click", (e)=>{
                            e.stopPropagation();
                            editProjectIndex = e.target.id;
                            editTodoIndex = e.target.value;
                            editOverlayOn();
                        }, true);
                        todoDescription.appendChild(todoDescriptionEditButton);

                        const editTodoForm = document.getElementById("editTodoForm")
                        editTodoForm.addEventListener("submit", function (e) {
                            e.preventDefault();

                            const editTodoFormData = new FormData(editTodoForm);
                                if (editTodoFormData.get("editTodoName")){
                                    myProjects[editProjectIndex].todos[editTodoIndex].title = editTodoFormData.get("editTodoName");
                                };
                                if (editTodoFormData.get("editTodoDue")){
                                    myProjects[editProjectIndex].todos[editTodoIndex].dueDate = format(parseISO(editTodoFormData.get("editTodoDue")), "MM/dd/yyyy");
                                };
                                if (editTodoFormData.get("editTodoDescription")){
                                    myProjects[editProjectIndex].todos[editTodoIndex].description = editTodoFormData.get("editTodoDescription");
                                };
                                if (editTodoFormData.get("editPriority")){
                                    myProjects[editProjectIndex].todos[editTodoIndex].priority = editTodoFormData.get("editPriority");
                                };
                            
                            editOverlayOff();
                            clearCards();
                            displayProjects();
                        });

                    todoWrapper.appendChild(todoDescription);
                    
                    const displayDescription = ()=>{
                        if (todoDescription.style.display === "block"){
                            todoDescription.style.display = "none";
                            myProjects[i].todos[j].descriptionOpen = false;
                        } else{
                            todoDescription.style.display = "block";
                            myProjects[i].todos[j].descriptionOpen = true;
                        };
                    };

                    todoWrapper.addEventListener("click", displayDescription);

                projectContainer.appendChild(todoWrapper);
                
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

function editOverlayOn(){
    document.getElementById("editOverlay").style.display = "flex";
};

function editOverlayOff() {
    document.getElementById("editOverlay").style.display = "none";
};

const overlayOffButton = document.querySelector(".overlayOff");
overlayOffButton.addEventListener("click", overlayOff);

const editOverlayOffButton = document.querySelector(".editOverlayOff");
editOverlayOffButton.addEventListener("click", editOverlayOff);

export { displayProjects, clearCards, overlayOn, overlayOff }
