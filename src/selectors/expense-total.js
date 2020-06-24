export default (expenses) =>{
    let sum = 0
    expenses.forEach(expense => {
        sum += expense.amount
    });
    return sum
}