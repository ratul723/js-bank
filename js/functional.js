function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = ''
    return value;
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldTagText = fieldTag.innerText;
    const value = parseFloat(fieldTagText);
    return value;
}
function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}

function updateBalance(amount, isAdding) {
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}

//handle deposite
document.getElementById('diposit-button').addEventListener('click', function () {
    const amount = getInputValue('Deposit-amount');
    if (amount > 0) {
        updateTotal('deposite-total', amount);
        updateBalance(amount, true);
    }

})

//hanlde withdraw
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-amount');
    const balance = getInnerTextValue('balance-total')
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }

})