const myProjects = [];

class Project {
    constructor (title){
        this.title = title;
    };

    addProject(projectName){
        myProjects.push(projectName);
    };
};

const defaultProject = (function(){
    const placeholder = new Project("placeholderTitle");
    placeholder.addProject(placeholder);
})();

export { myProjects };