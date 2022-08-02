import createTask from "./createTask.js";

const getProjectDataFromCards = () => {
    let tempProjectTaskArray = [];
    const cardNodeArray = document.querySelectorAll('.card');
    console.log(cardNodeArray);
    let j = 0;
    cardNodeArray.forEach((node) => {

        let taskID = node.getAttribute('data-id');
        let taskTitle = node.querySelector('.taskTitle').textContent;
        // if (taskTitle == "") {
        //     taskTitle = node.querySelector('.taskTitle').getAttribute('placeholder');
        // }
        let taskDescription = node.querySelector('.taskDescription').textContent;
        console.log(node);
        let taskStartDate = new Date(node.querySelector('.taskStartDate').textContent).toISOString();
        console.log(taskStartDate);
        let taskDueDate = new Date(node.querySelector('.taskDueDate').textContent).toISOString();
        console.log(taskDueDate);
        let taskPriority = node.querySelector('.taskPriority').textContent.replace(" Priority", "");
        // Extract only the project title from the element textContent remove fluff
        let taskProject = node.querySelector('.taskProject').textContent.substring(20).replace(" project.", "");
        console.log(`Iterations: ${j}`);
        j++
        console.log(`TaskTitle: ${taskTitle} TaskDescr: ${taskDescription} TaskStart: ${taskStartDate} TaskDue: ${taskDueDate}`);
        console.log(taskID);
        tempProjectTaskArray.push(createTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject, taskStartDate, taskID));
        console.log(tempProjectTaskArray);
    } )
}

export default getProjectDataFromCards;