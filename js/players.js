const playerNameArray = [];

function display() {
    const playersList = document.getElementById('player-list')
    playersList.innerHTML = '';
    for (let i = 0; i < playerNameArray.length; i++) {
        const name = playerNameArray[i].playerName;
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li><span>${i + 1}</span>. <span>${name}</span></li> 
        `;
        playersList.appendChild(ul);
        if (playersList.childElementCount > 4) {
            alert('You can not add more than five');
            return;
        }
        // if (document.getElementById('player-list').childElementCount > 4) {
        //     alert('Limit Excedded')
        //     return false;
        // }

    }

}

function addToList(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName)
    const nameObject = {
        playerName: playerName
    }
    playerNameArray.push(nameObject);
    display(playerNameArray);
}
