import "./styles.css";
// import { myTodos, newTodo, myProjects } from "./todoCreator.js";
import { myProjects } from "./projectCreator.js";

console.log(myProjects);
console.table(myProjects);
console.log(myProjects[0].todos[1]);
console.table(myProjects[0].todos);