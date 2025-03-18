const projectCreator = ()=>{
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
};

export {projectCreator};