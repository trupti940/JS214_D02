function calculateTotalExpenses(expenses) {
    // Use reduce to sum up the amounts from the expense items
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// Example usage:
const expenses = [
    { name: "Food", amount: 58 },
    { name: "Transportation", amount: 30 },
    { name: "Internet", amount: 45 },
    { name: "Groceries", amount: 72 }
];

const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses); // Output should be: 205
