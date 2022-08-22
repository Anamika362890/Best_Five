
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpencesValue = getElement('player-expenses');
    const managerAmount = getInputElementById('manager-field');


    const coachAmount = getInputElementById('coach-field');


    const calculateTotal = managerAmount + coachAmount + playerExpencesValue;

    const total = getElement('total');

    const calculateTotalAmount = setVlue('total', calculateTotal);


})