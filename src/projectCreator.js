import { myTodos } from "./todoCreator";

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
    const placeholder = new Project("Placeholder", myTodos);
    placeholder.addProject(placeholder);
})();

export { myProjects };