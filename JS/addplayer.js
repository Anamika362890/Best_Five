const cart = [];
function displayPlayer(cartPlayer) {


    if (cartPlayer.length > 5) {
        alert("You can not add more than 5 players");
        return;


    }


    const tableBody = document.getElementById('cart-players');

    tableBody.innerHTML = '';
    for (i = 0; i < cartPlayer.length; i++) {

        const name = cart[i].playerName;


        const tr = document.createElement('tr');
        const playerNumber = i + 1;
        //Player Expeses start
        document.getElementById('btn-calculate').addEventListener('click', function () {
            const perPlayerAmount = getInputElementById('per-player');


            const playerExpencesValue = getElement('player-expenses');
            // Set new value
            const playerExpencesTotal = perPlayerAmount * playerNumber;
            const playerExpenses = setVlue('player-expenses', playerExpencesTotal);
            //player Expenses End

        })
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        
        `;
        tableBody.appendChild(tr);
    }

}




function addPlayer(element) {


    element.disabled = true;
    element.style.backgroundColor = 'lightgray';
    element.style.color = 'snow';







    const playerName = element.parentNode.children[0].innerText;

    const player = {
        playerName: playerName,

    }

    cart.push(player);


    displayPlayer(cart);


}


