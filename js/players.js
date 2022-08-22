
document.getElementById('player-1').addEventListener('click', function () {
    const selectPlayer = document.getElementById('select-players');
    const li = document.createElement('li')
    li.innerText = 'Lionel Messi'
    selectPlayer.appendChild(li)
})
document.getElementById('player-2').addEventListener('click', function () {
    const selectPlayer = document.getElementById('select-players');
    const li = document.createElement('li')
    li.innerText = 'Naymer Jr'
    selectPlayer.appendChild(li)
})
document.getElementById('player-3').addEventListener('click', function () {
    const selectPlayer = document.getElementById('select-players');
    const li = document.createElement('li')
    li.innerText = 'Kylian Mbappe'
    selectPlayer.appendChild(li)
})
document.getElementById('player-4').addEventListener('click', function () {
    const selectPlayer = document.getElementById('select-players');
    const li = document.createElement('li')
    li.innerText = 'Ronaldo'
    selectPlayer.appendChild(li)
})
document.getElementById('player-5').addEventListener('click', function () {
    const selectPlayer = document.getElementById('select-players');
    const li = document.createElement('li')
    li.innerText = 'Sergio Ramos'
    selectPlayer.appendChild(li)
})
document.getElementById('player-6').addEventListener('click', function () {
    const selectPlayer = document.getElementById('select-players');
    const li = document.createElement('li')
    li.innerText = 'Renato Sanches'
    selectPlayer.appendChild(li)
})

// const selectPlayer = document.getElementById('select-players');
// const player = selectPlayer.length
// console.log(player)

const ul = document.querySelectorAll('#select-players')
console.log(ul)


