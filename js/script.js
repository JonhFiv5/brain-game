function generateSequence(colors) {
    let sequence = [];
    let oldNumber = -1;
    let newNumber = -1;
    for(let i = 0; i < 6; i++) {
        do {
            newNumber = Math.floor(Math.random() * colors.length);
        } while(newNumber == oldNumber);
        sequence.push(newNumber);
        oldNumber = newNumber;
    }
    return sequence;
}

function highlightButton(button) {
    console.log(button.id);
    
    let defaultContrast = button.style.filter;
    button.style.filter = "contrast(100%)";
    
    setTimeout(function() {
        button.style.filter = defaultContrast;
    }, 1000);
}