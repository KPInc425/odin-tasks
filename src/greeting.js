const greeting = (name) => {
    if (name == undefined) {
        return "Hello, there! What should I call you?"
    } else {
        return `Welcome, back ${name} `;
    }
    
};

export default greeting;