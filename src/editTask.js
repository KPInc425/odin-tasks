function editTask(taskCard) {
    console.log("Initiate Edit Task...");
    console.log(taskCard);

    // Get Card Unique ID
    const cardID = taskCard.querySelector('[data-id]').getAttribute('data-id');
    console.log(cardID);

    let cardTitle = taskCard.querySelector('h2').innerText;
    cardTitle = cardTitle.split(':');
    console.log(cardTitle[1]);

    const editTaskForm = document.createElement('form');
    editTaskForm.setAttribute('name', 'editTaskForm');
    editTaskForm.setAttribute('action', 'get');
    editTaskForm.classList.add('editTaskCard');

    const editTaskTitleInput = document.createElement('input');
    editTaskTitleInput.setAttribute('placeholder', cardTitle[1]);

    editTaskForm.appendChild(editTaskTitleInput);

    return editTaskForm;

    // console.log(editTaskTitleInput);

}

export default editTask;