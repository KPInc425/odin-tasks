import editTask from "./editTask";

function projectTasksEventListener () {
    const mainContainer = document.querySelector('main');
    const cardNodeArray = document.querySelectorAll(".card");
    const cardArray = Array.from(cardNodeArray);
    // let childNodes = cardNodeArray.childNodes;
    console.log(cardArray);

    cardArray.forEach((card) => {
        card.addEventListener('click', () => {
            console.log(card);
            const editedTask = editTask(card);
            mainContainer.appendChild(editedTask);
        })
    })
}

export default projectTasksEventListener;