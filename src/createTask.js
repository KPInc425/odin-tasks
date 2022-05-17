import GenerateUniqueID from './generateUniqueID';

function createTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject) {
    
    // Make into helper module
    // function displayFriendlyDate(date) {
    //     date = date;
    //     y = date.getFullYear();
    //     m = date.getMonth();
    //     d = date.getDate();

    //     return {y,m,d};
    // }
    

    const dateNow = new Date()
    const taskCreateDate = new Date(); //new Date(dateNow.getTime());
    const taskID = GenerateUniqueID();
    // console.log(dateNow);
    dateNow.setDate(dateNow.getDate()+1);
    // console.log(dateNow);
    taskTitle = taskTitle || "New Task";
    taskDescription = taskDescription || "New Description";
    if (taskDueDate == undefined) {
        taskDueDate = dateNow;
    } else {
        taskDueDate = taskDueDate
    }
    // dueDate = dueDate | dateNow;
    taskPriority = taskPriority || "Low";
    taskProject = taskProject || "Sample Project"
    
    
    const taskInfo = () => {
        console.log({taskTitle, taskDescription, taskDueDate, taskCreateDate, taskPriority, taskID, taskProject});
    }

    return {
        taskTitle,
        taskDescription,
        taskDueDate,
        taskCreateDate,
        taskID,
        taskPriority,
        taskProject,
        taskInfo
    }
}

export default createTask;