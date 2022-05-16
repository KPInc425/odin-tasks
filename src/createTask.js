import GenerateUniqueID from './generateUniqueID';

function createTask(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject) {
    const dateNow = new Date()
    const createDate = new Date(); //new Date(dateNow.getTime());
    const ID = GenerateUniqueID();
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
        console.log({taskTitle, taskDescription, taskDueDate, createDate, taskPriority, ID, taskProject});
    }

    return {
        taskTitle,
        taskDescription,
        taskDueDate,
        taskPriority,
        taskProject,
        taskInfo
    }
}

export default createTask;