
document.getElementById('player-cost').addEventListener('click', function () {
    const numberOfPlayers = playerNameArray.length;

    const perPlayer = budgetCalculate('per-player-cost')
    const calculateTotalPlayerCost = perPlayer * numberOfPlayers;

    const playerExpenses = document.getElementById('total-player-cost')
    playerExpenses.innerText = calculateTotalPlayerCost;


    const calculateTotal = document.getElementById('calculate-Total')
    calculateTotal.addEventListener('click', function () {
        const managerBudget = budgetCalculate('manager-cost')
        const coachBudget = budgetCalculate('coach-cost')

        const playerExpenses = document.getElementById('total-player-cost')
        const playerCostString = playerExpenses.innerText
        const playerCost = parseInt(playerCostString);

        const totalBudget = playerCost + managerBudget + coachBudget;
        // console.log(totalBudget);

        const totalBudgetCost = document.getElementById('total-budget')
        totalBudgetCost.innerText = totalBudget;

    })
})