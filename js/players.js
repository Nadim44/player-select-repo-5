
const playerNameArray = [];

function display() {
    const selectPlayer = document.getElementById('player-list')
    selectPlayer.innerHTML = '';
    for (let i = 0; i < playerNameArray.length; i++) {
        const name = playerNameArray[i].playerName;
        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li><span>${i + 1}</span>. <span>${name}</span></li> 
        `;
        selectPlayer.appendChild(ul);
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
