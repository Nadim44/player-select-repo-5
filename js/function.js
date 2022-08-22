function budgetCalculate(elementId) {
    const inputCost = document.getElementById(elementId);

    const inputCostString = inputCost.value;
    const inputBudget = parseInt(inputCostString);
    return inputBudget;
}
