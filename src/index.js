import _ from 'lodash';
import myName from './myName';
import printMe from './print';
import createTask from './createTask';

const app = (() => {

    function component() {
        const element = document.createElement('div');
        const btn = document.createElement('button');
    
        // Lodash, now imported by this script
        element.textContent = myName('KP');
    
        btn.innerText = 'Click me and check the console!';
        btn.onclick = printMe;
    
        element.appendChild(btn);
    
        return element;
    }
    
    document.body.appendChild(component());

    let newTask = createTask();

    console.log(newTask.info());
})();
