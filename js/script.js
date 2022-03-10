function generateSequence(colors) {
    let sequence = [];
    for(let i = 0; i < 6; i++) {
        sequence.push(Math.floor(Math.random() * colors.length));
    }
    return sequence;
}

function highlightButton(button) {
    console.log(button.id);
    
    let defaultContrast = button.style.filter;
    button.style.filter = "contrast(100%)";
    
    setTimeout(function() {
        button.style.filter = defaultContrast;
    }, 2000);
}