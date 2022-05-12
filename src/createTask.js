function createTask(title, description, dueDate, priority) {
    const dateNow = new Date()
    const createDate = new Date(dateNow.getTime());
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
        return console.log({title, description, dueDate, createDate, priority});
    }

    return {
        info
    }
}

export default createTask;