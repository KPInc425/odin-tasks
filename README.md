Project: To Do App
Purpose: Education 
Course: The Odin Project

Build to do app.


#Todo

-Refactor Getting Changed data, as its a bit blunt force atm
--getProjectDataFromCards maybe changed to just the single card now that we are closing editing options for non-selected cards.
-create new task array from currently displayed project (getProjectDataFromCards.js)
-Display Priority editing element when button is depressed
-display project selection dropdown when edit button for project is depressed
-Refacter AddEditButtonsSelected_EL into smaller modules for each function
-Refactor pressEnter event listener to reduce reduncancy and for cleaner code
-Slice up start/duedate displayed string to be more readable and local
-Make removeEditButtons into a function from the window addeventlisteners that removes buttons for more modularity.
-work on replacing data element with old data when clicked away from input window or when click on another element.
-stop input box from hiding when trying to highlight text
-make new task element sticky on Bottom 
-prevent startDate being later than dueDate

-add dropdown feature to the tasks when they are displayed.
--Only show the name and maybe duedate
--When clicked show full task

-Add new task button
--Brings up more full featured UI to add task
--set all attributes


!!!--New Idea Recodes--!!!
-Remove edit buttons for due/start Date and add datetime input when displaying tasks