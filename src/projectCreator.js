import { myTodos } from "./todoCreator";

const myProjects = [];

class Project {
    constructor (title, dueDate, priority, todos){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.todos = todos;
    };

    addProject(projectName){
        myProjects.push(projectName);
    };
};

const defaultProject = (function(){
    const placeholder = new Project("placeholderTitle", "Today", "Critical", myTodos);
    placeholder.addProject(placeholder);
})();

export { myProjects };