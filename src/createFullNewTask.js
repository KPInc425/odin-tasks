import createTask from "./createTask.js";
// import { editTask, getTaskWithID } from "./projectArray.js";

const createFullNewTask = (taskCard) => {
    // console.log(taskCard);
    if (!(taskCard === undefined)) {
        let taskID = taskCard.getAttribute('data-id');
        let taskTitle = taskCard.querySelector('.taskTitle').textContent;
        let taskDescription = taskCard.querySelector('.taskDescription').textContent;
        // console.log(taskCard);
        let taskStartDate = new Date(taskCard.querySelector('.taskStartDate').value);
        // console.log(taskStartDate);
        let taskDueDate = new Date(taskCard.querySelector('.taskDueDate').value);
        // console.log(taskDueDate);
        let taskPriority = taskCard.querySelector('.taskPriority').getAttribute('data-priority');
        // Extract only the project title from the element textContent remove fluff
        console.log(taskCard.querySelector('.taskProject').textContent);
        console.log(taskCard.querySelector('.taskProject').value);
        let taskProject = taskCard.querySelector('.taskProject')
        if (taskCard.querySelector('.taskProject').value.length < 3) {
            taskProject = taskCard.querySelector('.taskProject').placeholder;
        } else {
            taskProject = taskCard.querySelector('.taskProject').value
        }

        console.log(taskProject);
        // console.log(`TaskTitle: ${taskTitle} TaskDescr: ${taskDescription} TaskStart: ${taskStartDate} TaskDue: ${taskDueDate}`);
        // console.log(taskID);
        let editedTask = createTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject, taskStartDate, taskID);
        // console.log(editedTask);
    
    //     editTask(editedTask.taskProject);
        return editedTask;
    }
}

export default createFullNewTask;