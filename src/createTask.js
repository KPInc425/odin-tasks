import GenerateUniqueID from './generateUniqueID';

function createTask(title, description, dueDate, priority) {
    const dateNow = new Date()
    const createDate = new Date(dateNow.getTime());
    const ID = GenerateUniqueID();
    // console.log(dateNow);
    dateNow.setDate(dateNow.getDate()+1);
    // console.log(dateNow);
    title = title || "New Task";
    description = description || "New Description";
    if (dueDate == undefined) {
        dueDate = dateNow;
    } else {
        dueDate = dueDate
    }
    // dueDate = dueDate | dateNow;
    priority = priority || "Low";
    
    
    const info = () => {
        console.log({title, description, dueDate, createDate, priority, ID});
    }

    return {
        title,
        description,
        dueDate,
        priority,
        info
    }
}

export default createTask;