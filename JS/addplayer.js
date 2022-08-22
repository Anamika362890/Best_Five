const cart = [];
function displayPlayer(cartPlayer) {

    //console.log(cartPlayer);
    const tableBody = document.getElementById('cart-players');
    tableBody.innerHTML = '';
    for (i = 0; i < cartPlayer.length; i++) {
        //console.log(cart[i].playerName);
        const name = cart[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        
        `;
        tableBody.appendChild(tr);
    }

}




function addPlayer(element) {

    const playerName = element.parentNode.children[0].innerText;

    const player = {
        playerName: playerName,

    }

    cart.push(player);


    displayPlayer(cart);

}