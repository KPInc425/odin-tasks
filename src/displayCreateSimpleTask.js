const displayCreateSimpleTask = () => {
    // const container = document.querySelector('header');
    // console.log(container);

    // Create Wrapper container
    const newTaskContainer = document.createElement('div');
    newTaskContainer.id = 'simpleNewTaskContainer';
    newTaskContainer.classList.add('flex');

    // Create Input for new task
    const inputNewTask = document.createElement('input');
    inputNewTask.type = "text";
    inputNewTask.id = "simpleNewTaskInput";
    inputNewTask.placeholder = "Enter New Task...";
    inputNewTask.name = "simpleNewTask";

    // Create Button for Inputting new Task
    const btnNewTask = document.createElement('button');
    btnNewTask.name = "simpleNewTask";
    btnNewTask.textContent = "+";
    btnNewTask.classList.add("btnNewTask");

    // Append all elements
    newTaskContainer.appendChild(inputNewTask);
    newTaskContainer.appendChild(btnNewTask);

    return newTaskContainer;


}

export default displayCreateSimpleTask;