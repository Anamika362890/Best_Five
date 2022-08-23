function getInputElementById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;

    const inputFieldValue = parseFloat(inputFieldValueString);

    if (inputFieldValue < 0 || isNaN(inputFieldValue)) {
        inputField.value = '';
        alert("Please Provide A Valid Number")
        return;
    }

    else {

        return inputFieldValue;
    }

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




        return;
    }
    else {
        textElement.innerText = newValue;
    }

}






