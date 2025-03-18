const myProjects = [];

class Project {
    constructor (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };

    addProject(projectName){
        myProjects.push(projectName);
    };
};

console.table(myProjects);

const defaultProject = new Project("placeholderTitle", "placeholderDescription", "placeholderDueDate", "placeholderPriority");
defaultProject.addProject(defaultProject);

console.table(myProjects);

export {myProjects};