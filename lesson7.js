let text = 'Red cat love potatoes';

function fillText() {
    var textElements = document.querySelectorAll('ul>li:last-child')
    
    for (var i = 0; i < textElements.lenght; i++) {
        var currentText = textElements[i];

        console.log(currentText.innerHTML);
        currentText.innerHTML = 'Pink';
    }
}