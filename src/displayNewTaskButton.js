import el_displayNewTaskCard from './el_displayNewTaskCard.js';

const displayNewTaskButton = () => {
    // console.log('Displaying New Task Button!');

    const mainContainer = document.querySelector('main');
    const btnNewTask = document.createElement('button');
    btnNewTask.classList.add('newTaskButton');
    btnNewTask.innerText = 'New Task';
    btnNewTask.setAttribute('title', 'New Task');

    mainContainer.appendChild(btnNewTask);

    el_displayNewTaskCard();
}

export default displayNewTaskButton;