const getProjectDataFromCards = () => {
    const cardNodeArray = document.querySelectorAll('.card');
    let j = 0;
    cardNodeArray.forEach((node) => {

        let taskTitle = node.querySelector('.taskTitle').textContent;
        // if (taskTitle == "") {
        //     taskTitle = node.querySelector('.taskTitle').getAttribute('placeholder');
        // }
        let taskDescription = node.querySelector('.taskDescription').textContent;
        let taskStartDate = new Date(node.querySelector('.taskStartDate').textContent).toISOString();
        let taskDueDate = new Date(node.querySelector('.taskDueDate').textContent).toISOString();
        let taskPriority = node.querySelector('.taskPriority').textContent.replace(" Priority", "");
        // Extract only the project title from the element textContent remove fluff
        let taskProject = node.querySelector('.taskProject').textContent.substring(20).replace(" project.", "");
        console.log(`Iterations: ${j}`);
        j++

        console.log(`TaskTitle: ${taskTitle} TaskDescr: ${taskDescription} TaskStart: ${taskStartDate} TaskDue: ${taskDueDate}`);
    } )
}

export default getProjectDataFromCards;