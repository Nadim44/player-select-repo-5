
document.getElementById('player-cost').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('per-player-cost')
    const perPlayerString = perPlayerCost.innerText
    const perPlayer = parseInt(perPlayerString)
    // console.log(perPlayer)
    const calculateTotalPlayerCost = perPlayer * 5
    // console.log(playerTotalCost)
    const playerExpenses = document.getElementById('total-player-cost')
    // const totalPlayerCostString = playerExpenses.innerText
    // const totalPlayerCost = parseInt(totalPlayerCostString)
    playerExpenses.innerText = calculateTotalPlayerCost


    const calculateTotal = document.getElementById('calculate-Total')
    calculateTotal.addEventListener('click', function () {
        const managerBudget = budgetCalculate('manager-cost')
        const coachBudget = budgetCalculate('coach-cost')

        // const managerCost = document.getElementById('manager-cost')
        // const managerCostString = managerCost.value
        // const managerBudget = parseInt(managerCostString);

        // const coachCost = document.getElementById('coach-cost')
        // const coachCostString = coachCost.value
        // const coachBudget = parseInt(coachCostString);
        // managerCost.value = managerBudget
        // console.log(managerCost)
        const playerExpenses = document.getElementById('total-player-cost')
        const playerCostString = playerExpenses.innerText
        const playerCost = parseInt(playerCostString)

        const totalBudget = playerCost + managerBudget + coachBudget
        console.log(totalBudget)

        const totalBudgetCost = document.getElementById('total-budget')
        // const totalBudgetString=totalBudgetCost.innerText
        // const totalBudget=parseInt(totalBudgetString)
        totalBudgetCost.innerText = totalBudget

    })
})