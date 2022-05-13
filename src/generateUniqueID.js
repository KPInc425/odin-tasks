// A little help from https://gist.github.com/gordonbrander/2230317 found solution in comments
function GenerateUniqueID() {
    // function chr4() {
    //     return Math.random().toString(16).slice(-4).toUpperCase();
    // }
    // return chr4() + chr4() +
    // '-' + chr4() +
    // '-' + chr4() +
    // '-' + chr4() +
    // '-' + chr4() + chr4() + chr4();

    let array = new Uint32Array(8);
    window.crypto.getRandomValues(array);
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4);
        // console.log(i);
    }
    return str;
}

export default GenerateUniqueID;