const getProjectDataFromCards = () => {
    const cardNodeArray = document.querySelectorAll('.card');
    let j = 0;
    cardNodeArray.forEach((node) => {
        // console.log(node);
        // console.log(j);
        // j++;

        let taskTitle = node.querySelector('.taskTitle').innerHTML;
        let taskDescription = node.querySelector('.taskDescription').innerHTML;
        let taskStartDate = new Date(node.querySelector('.taskStartDate').innerHTML).toISOString();
        let taskDueDate = new Date(node.querySelector('.taskDueDate').innerHTML).toISOString();
        let taskPriority = node.querySelector('.taskPriority').innerHTML;
        // Extract only the project title from the element innerHTML remove fluff
        let taskProject = node.querySelector('.taskProject').innerHTML.substring(20).replace(" project.", "");
        console.log(taskPriority);

        console.log(`TaskTitle: ${taskTitle} TaskDescr: ${taskDescription} TaskStart: ${taskStartDate}`);


    } )
}

export default getProjectDataFromCards;