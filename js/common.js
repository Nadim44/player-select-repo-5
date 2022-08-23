
function budgetCalculate(elementId) {
    const otherBudget = document.getElementById(elementId);

    const otherBudgetString = otherBudget.value;
    const othercost = parseInt(otherBudgetString);
    return othercost;
}
