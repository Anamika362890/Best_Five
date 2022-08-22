function getInputElementById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;

    const inputFieldValue = parseFloat(inputFieldValueString);
    if (inputFieldValue < 0) {
        alert("This Value can not be negative");

        return;
    }

    return inputFieldValue;
}

function getElement(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function setVlue(elementId, newValue) {
    const textElement = document.getElementById(elementId);

    if (isNaN(newValue)) {

        alert('Please provide a valid number');


        return;
    }
    else {
        textElement.innerText = newValue;
    }

}






