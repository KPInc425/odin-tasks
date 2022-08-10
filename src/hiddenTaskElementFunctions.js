const displayHiddenTaskElements = (card) => {
    const hiddenElementArray = card.querySelectorAll('.hidden');
    hiddenElementArray.forEach((element) => {
        element.classList.remove('hidden')
        element.classList.add('show')
    })
}
const hideHiddenTaskElements = (card) => {

    if (card != undefined) {
        const shownHiddenElementArray = card.querySelectorAll('.show');
        shownHiddenElementArray.forEach((element) => {
            element.classList.remove('show')
            element.classList.add('hidden')
        })
    }
}

export {
    displayHiddenTaskElements,
    hideHiddenTaskElements,
}