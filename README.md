Project: To Do App
Purpose: Education 
Course: The Odin Project

Build to do app.


#Todo

-WHEN DATA IS LOADED FROM LOCAL STORAGE ATTACHED FUNCTIONS CEASE TO WORK
-Refactor logic for localStorageFunctions > stringify taskArray of project > stringify project
--When importing from localStorage parce projects > createProjects with parced array > parce project task arrays > createTasksArray with parced array > add tasks to appropriate project 
-styles cards to change text color based on priority
-Refacter AddEditButtonsSelected_EL into smaller modules for each function
-Refactor pressEnter event listener to reduce reduncancy and for cleaner code


-make new task element sticky on Bottom 
-prevent startDate being later than dueDate
-break down newTaskModule into smalle modules

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
-Feature: Add task to newly created project from edit task project dropdown menu similar to creating new project when making a new task.

Possible Bugs
-stop input box from hiding when trying to highlight text