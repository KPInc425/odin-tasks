import _ from 'lodash';
import myName from './myName';
import printMe from './print';
import createTask from './createTask';

// const app = (() => {

    let taskArray = [];

    function component() {
        const element = document.createElement('div');
        const btn = document.createElement('button');
    
        // Lodash, now imported by this script
        element.textContent = myName('KP');
    
        btn.innerText = 'Click me and check the console!';
        btn.addEventListener('click', () => {
            let newTask = createTask();
            taskArray.push(newTask);
            console.log(taskArray);
            console.log(taskArray[0].info());
        })
        // btn.onclick = printMe;
    
        element.appendChild(btn);
    
        return element;
    }
    document.body.appendChild(component());

    // let newTask = createTask();
// })();
