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

const newProject = ()=>{
    const newProject = new Project(prompt("Title"), prompt("Description"), prompt("Due Date"), prompt("Priority"));
    newProject.addProject(newProject);
};

const defaultProject = new Project("placeholderTitle", "placeholderDescription", "placeholderDueDate", "placeholderPriority");
defaultProject.addProject(defaultProject);

console.table(myProjects);

newProject();
console.table(myProjects);

export {myProjects};