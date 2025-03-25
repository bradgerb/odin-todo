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

    let todos = [placeholderTodo];

    const placeholderProject = new Project("Placeholder", todos);
    placeholderProject.addProject(placeholderProject);
})();

export { myProjects, Project };