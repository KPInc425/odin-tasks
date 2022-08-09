Project: To Do App
Purpose: Education 
Course: The Odin Project

Build to do app.


#Todo

-styles cards to change text color based on priority
-Change priority radio inputs to 3 buttons with labels for priority
-Add Labels (or colors) to radio buttons for priority
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

-make simple new task input put the new task into currently displayed project (currently only goes to default project);

-Add new task button
--Brings up more full featured UI to add task
--set all attributes


!!!--New Idea/Recodes--!!!
-Remove edit buttons for due/start Date and add datetime input when displaying tasks
-check that "uniqueID" isn't already being used in ALL PROJECTS
-Refactor project selection logic in AddEditButtonsSelected_EL and el_displayNewTaskCard

-Re-display current project card when taskProject is changed


-Feature: Allow a "favorites" section where you can pin tasks from different projects
-Feature: Display ALL tasks from ALL projects
-Feature: Change Priority Colors
