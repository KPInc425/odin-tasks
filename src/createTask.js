import GenerateUniqueID from './generateUniqueID';

function createTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject) {
    const dateNow = new Date()
    let taskCreateDate = new Date(); //new Date(dateNow.getTime());
    taskCreateDate = taskCreateDate.toISOString();
    const taskID = GenerateUniqueID();
    // console.log(dateNow);
    // Add 1 day to dateNow for a default dueDate
    dateNow.setDate(dateNow.getDate()+1);
    // console.log(dateNow);
    taskTitle = taskTitle || "New Task";
    taskDescription = taskDescription || "New Description";
    if (taskDueDate == undefined) {
        taskDueDate = dateNow.toISOString();
        // console.log(taskDueDate);
    } else {
        taskDueDate = taskDueDate
    }
    // dueDate = dueDate | dateNow;
    taskPriority = taskPriority || "Low";
    taskProject = taskProject || "Default"
    
    
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