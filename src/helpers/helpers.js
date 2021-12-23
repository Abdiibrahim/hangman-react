/**
 * Shows notification for 5 seconds
 * @param {*} setter 
 */
export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 5000);
}

/**
 * Checks if the user has won or lost
 * @param {*} correct 
 * @param {*} wrong 
 * @param {*} word 
 * @returns {string}
 */
export function checkWin(correct, wrong, word) {
    let status = 'win';

    // Check for win
    word.split('').forEach(letter => {
        if (!correct.includes(letter)) {
            status = '';
        }
    });

    // Check for loss
    if (wrong.length === 6) status = 'loss';

    return status;
}