var state = {
    income: 500,
    expense: 0,
     submit: 0,

}

var expense = document.getElementById('expense');
var income = document.getElementById('income');
var total = document.getElementById('total');
var submit = document.getElementById('submit');

function displayscreen() {
    income.innerHTML = `R${state.income}`
    expense.innerHTML = `R${state.expense}`
}

displayscreen();