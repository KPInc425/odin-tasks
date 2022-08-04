import createTask from "./createTask.js";

const getProjectDataFromCards = (taskCard) => {
    // let tempProjectTaskArray = [];
    // const cardNodeArray = document.querySelectorAll('.card');
    // console.log(cardNodeArray);
    // let j = 0;
    // cardNodeArray.forEach((node) => {

        let taskID = taskCard.getAttribute('data-id');
        let taskTitle = taskCard.querySelector('.taskTitle').textContent;
        // if (taskTitle == "") {
        //     taskTitle = taskCard.querySelector('.taskTitle').getAttribute('placeholder');
        // }
        let taskDescription = taskCard.querySelector('.taskDescription').textContent;
        console.log(taskCard);
        let taskStartDate = new Date(taskCard.querySelector('.taskStartDate').textContent).toISOString();
        console.log(taskStartDate);
        let taskDueDate = new Date(taskCard.querySelector('.taskDueDate').textContent).toISOString();
        console.log(taskDueDate);
        let taskPriority = taskCard.querySelector('.taskPriority').textContent.replace(" Priority", "");
        // Extract only the project title from the element textContent remove fluff
        let taskProject = taskCard.querySelector('.taskProject').textContent.substring(20).replace(" project.", "");
        // console.log(`Iterations: ${j}`);
        // j++
        console.log(`TaskTitle: ${taskTitle} TaskDescr: ${taskDescription} TaskStart: ${taskStartDate} TaskDue: ${taskDueDate}`);
        console.log(taskID);
        let tempTask = createTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject, taskStartDate, taskID);
        console.log(tempTask);
    // } )
}

export default getProjectDataFromCards;