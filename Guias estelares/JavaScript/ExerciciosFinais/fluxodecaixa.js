let cashflows = {
    incomes: [3000, 2550, 1575, 1357.23],
    expenses: [1550, 1735, 900, 377.46, 88.34],
};

function sum(array) {
    let total = 0;
    
    for(let value of array) {
        total += value
    }
    
    return total 
}

function calculateCashflows() {
    const incomesTotal = sum(cashflows.incomes)
    const expensesTotal = sum(cashflows.expenses)

    const balance = incomesTotal - expensesTotal
    const positive = balance >= 0
    let balanceText = "negativo"
    
    if (positive) {
        balanceText = "positivo"
    }
    console.log(`Seu saldo é ${balanceText}: R$ ${balance}`)
}

calculateCashflows();