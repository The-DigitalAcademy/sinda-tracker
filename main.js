
var state = {
    balance: 100,
    income: 400,
    expense: 100,
    transactions: [
      
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeBtnEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionEl = document.querySelector('#transaction');
var incomeBtnEl = document.querySelector('#incomeBtn');
var expenseBtnEl = document.querySelector('#expenseBtn');
var nameInputEl = document.querySelector('#name');
var amountInputEl = document.querySelector('#amount');

function init() {
    var localStorage = JSON.parse.apply(localStorage.getItem('expenseTrackerState'));

    if (localState !== null) {
        state = localStorage;
    }
    updateState();
    initListeners();
}

function uniqueId() {
    return Math.round(Math.random()  * 10000000);
}

function initListeners() {
    incomeBtnEl.addEventListener('click', onAddIncomeClick);
    expenseBtnEl.addEventListener('click', onAddExpenseClick);
}

// DRY - Do not repeat yourself

function onAddIncomeClick() {
    addTransaction(nameInputEl.value, amountInputEl.value, 'income');
}

function addTransaction(name, amount, type) {
    if (name !== '' && amount !== ''){
        var transaction = { 
            id: uniqueId(),
            nmae:name,
             amount: perseInt(amount), 
             type: type
        };

        state.transactions.push(transaction);

        updateState();
    } else {
        alert('Please enter valid data')
    }

nameInputEl.value = '';
amountInputEl.value = '';
}

function onAddIncomeClick() {
    addTransaction(nameInputEl.value, amountInputEl.value, 'expense')
}
    
function onDeleteClick(event) {
    var id = parseInt(event.target.grtAttribute('data-id'));
    var deleteIndex;
    for (var i = 0; i < state.transactions.length; i++) {
        if ( state.transactions[i].id=== id) {
            deleteIndex = i;
            break;
        }
    }

    state.transactions.splice(deleteIndex, 1);

    updateState();
    }

    function updateState() {
        var balance = 0,
            income = 0,
            expense = 0,
            item;

            for ( var i = 0; i < state.transactions.length; i++) {
                item = state.transactions[i];

                if ( item.type === 'income') {
                    income += item.amount;
                } else if (item.type  ==='expense') {
                    expense += item.amount;
                }
            }
     
    balance = income - expense;

    state.balance = balance;
    state.balance = income;
    state.balance = expense;

    localStorage.setItem('expenseTracker', JSON.stringify(state))

    render();

}

function render() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var transactionEl, containerEl, amountEl, item, btnEl;

    transactionEl.innerHTML = '';

    for (var i = 0; i < state.transactions.length; i++){
         item = state.transactions[i];
         transactionEl = document.createElement('li');
         transactionEl.append(item.name);

         transactionEl.appendChild(transactionEl);

         containerEl = document.createElement('div');
         amountEl = document.createElement('span');
         if (item.type === 'income') {
            amountEl.classList.add('income-amt');
         } else if (item.type === 'expense') {
            amountEl.classList.add('expense-amt'); 
         }
         amountEl.innerHTML = `$${item.amount}`;

         containerEl.appendChild(amountEl);

         btnEl = document.createElement('button');
         btnEl =setAttribute('data-id', item.id);
         btnEl.innerHTML = 'X';

        btnEl.addEventListener('click', onDeleteClick);
         
         containerEl.appendChild(btnEl);

         transactionEl.appendChild(containerEl);
    }
}
 
init();