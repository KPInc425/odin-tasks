Project: To Do App
Purpose: Education 
Course: The Odin Project

Build to do app.


#Todo

-Hook up to proper backend db

-Add confirmation when deleting anything
-Add Delete button to projectcard

-seperate el_displayNewTaskCard into 2 modules, 1 for EL and the other for displaying the new Form
-styles cards to change text color based on priority
-Refacter AddEditButtonsSelected_EL into smaller modules for each function
-Refactor pressEnter event listener to reduce reduncancy and for cleaner code

-Connect project label container to priority colors
-make new task element sticky on Bottom 
-prevent startDate being later than dueDate
-break down newTaskModule into smalle modules

-add dropdown feature to the tasks when they are displayed.
--Only show the name and maybe duedate
--When clicked show full task

-make simple new task input put the new task into currently displayed project (currently only goes to default project);

???BUGS???
-New task button positioning when lots of tasks


!!!--New Idea/Recodes--!!!
-Remove edit buttons for due/start Date and add datetime input when displaying tasks
-Only append data for single element when enter is pressed
-set default duedate for project?
-check that "uniqueID" isn't already being used in ALL PROJECTS
-Refactor project selection logic in AddEditButtonsSelected_EL and el_displayNewTaskCard

-Re-display current project card when taskProject is changed

-Feature: Ability to "complete" tasks > adds to CompletedTaskArray for each project (Maybe a Total Task Done array as well)
-Feature: Save data somewhere other than localStorage
-Feature: Allow a "favorites" section where you can pin tasks from different projects
-Feature: Display ALL tasks from ALL projects
-Feature: Change Priority Colors
-Feature: Add task to newly created project from edit task project dropdown menu similar to creating new project when making a new task.

Possible Bugs
-stop input box from hiding when trying to highlight text