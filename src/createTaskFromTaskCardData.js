import createTask from "./createTask.js";
// import { editTask, getTaskWithID } from "./projectArray.js";

const createTaskFromTaskCardData = (taskCard) => {
    // console.log(taskCard);
    if (!(taskCard === undefined)) {
        let taskID = taskCard.getAttribute('data-id');
        let taskTitle = taskCard.querySelector('.taskTitle').textContent;
        let taskDescription = taskCard.querySelector('.taskDescription').textContent;
        // console.log(taskCard);
        let taskStartDate = new Date(taskCard.querySelector('.taskStartDate').textContent).toISOString();
        // console.log(taskStartDate);
        let taskDueDate = new Date(taskCard.querySelector('.taskDueDate').textContent).toISOString();
        // console.log(taskDueDate);
        let taskPriority = taskCard.querySelector('.taskPriority').textContent.replace(" Priority", "");
        // Extract only the project title from the element textContent remove fluff
        console.log(taskCard.querySelector('.taskProject'));
        console.log(taskCard.querySelector('.taskProject').textContent);
        let taskProject = taskCard.querySelector('.taskProject').textContent.substring(16);
        // console.log(taskProject);
        // console.log(`TaskTitle: ${taskTitle} TaskDescr: ${taskDescription} TaskStart: ${taskStartDate} TaskDue: ${taskDueDate}`);
        // console.log(taskID);
        let editedTask = createTask(taskTitle, taskDescription, taskProject, taskDueDate, taskPriority, taskStartDate, taskID);
        // console.log(editedTask);
    
    //     editTask(editedTask.taskProject);
        return editedTask;
    }
}

export default createTaskFromTaskCardData;