import createTaskFromTaskCardData from "./createTaskFromTaskCardData";
import { deleteTask } from "./projectArray";

const el_DeleteButton = (taskCard) => {
    console.log(taskCard);
    const btnDelete = taskCard.querySelector('.deleteTask');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        console.log('click');
        taskCard.classList.add('hidden');
        let deletedTask = createTaskFromTaskCardData(taskCard);
        deleteTask(deletedTask);
    })
}

export default el_DeleteButton;