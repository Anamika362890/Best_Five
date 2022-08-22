document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerAmount = getInputElementById('per-player');


    const playerExpencesValue = getElement('player-expenses');
    // Set new value
    const playerExpencesTotal = perPlayerAmount * 5;
    const playerExpenses = setVlue('player-expenses', playerExpencesTotal);


})
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpencesValue = getElement('player-expenses');
    const managerAmount = getInputElementById('manager-field');


    const coachAmount = getInputElementById('coach-field');


    const calculateTotal = managerAmount + coachAmount + playerExpencesValue;

    const total = getElement('total');

    const calculateTotalAmount = setVlue('total', calculateTotal);


})