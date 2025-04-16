import { myProjects } from "./projectCreator";

const saveProjects = (myProjects)=>{
    let JSONProjects = JSON.stringify(myProjects);
    localStorage.setItem("myProjects", JSONProjects);
};

const getProjects = ()=>{
    let storedProjects = JSON.parse(localStorage.getItem("myProjects"));
    let projectBuilder = myProjects;

    for (let i = 0; i < projectBuilder.length; i++){
        projectBuilder[i].title = storedProjects[i].title;
        projectBuilder[i].todos = storedProjects[i].todos;

        for (let j = 0; j < projectBuilder[i].todos.length; j++){
            projectBuilder[i].todos[j].title = storedProjects[i].todos[j].title;
            projectBuilder[i].todos[j].description = storedProjects[i].todos[j].description;
            projectBuilder[i].todos[j].dueDate = storedProjects[i].todos[j].dueDate;
            projectBuilder[i].todos[j].priority = storedProjects[i].todos[j].priority;
            projectBuilder[i].todos[j].completed = storedProjects[i].todos[j].completed;
            projectBuilder[i].todos[j].descriptionOpen = storedProjects[i].todos[j].descriptionOpen;
        };
    };
    return projectBuilder
};

export { saveProjects, getProjects }