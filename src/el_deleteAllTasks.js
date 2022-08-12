const deleteAllTasks = () => {
    const deleteAllTasksButton = document.getElementById('deleteAllTasks');

    deleteAllTasksButton.addEventListener('click', () => {
        console.log('click');
        if (confirm("Are you sure you want to do this?")) {
            if(confirm("This can't be undone, all Projects and tasks will be DELETED!")) {
                if(confirm("Last Chance?!?!?!")) {
                    localStorage.clear();
                    location.reload();
                } else {
                    alert("That was close! You live dangerously!");
                }
            } else {
                alert("Just one more and that could have been bad...");
            }
        } else {
            alert("Good, not too hasty!");
        }
    })
}

export default deleteAllTasks;