import { placeholderTodo } from "./todoCreator";

const myProjects = [];

class Project {
    constructor (title, todos){
        this.title = title;
        this.todos = todos;
    };

    addProject(projectName){
        myProjects.push(projectName);
    };
};

const defaultProject = (function(){
    const placeholderProject = new Project("Placeholder", placeholderTodo);
    placeholderProject.addProject(placeholderProject);
})();

export { myProjects, Project };