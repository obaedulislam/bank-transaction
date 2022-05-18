function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const filedValueInText = fieldTag.innerText;
    const value = parseFloat(filedValueInText);
    return value;
}

function updateTotal(fieldId, amount) {
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalText);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;

    return newTotal;

}

function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById("balance-total");
    // const previousBalanceText = balanceTag.innerText;
    // const previousBalance = parseFloat(previousBalanceText);
    const previousBalance = getInnerTextValue("balance-total");
    let newBalance;
    if(isAdding == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById("balance-total").innerText = newBalance;
}

document.getElementById("deposit-button").addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if(depositAmount > 0){
        updateTotal("deposit-total", depositAmount);
        updateBalance(depositAmount, true);
    }

});
/*== Deposit Update End == */

document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
        const balance = getInnerTextValue("balance-total");
    if(withdrawAmount > 0 && withdrawAmount <= balance){
        updateTotal("withdraw-total", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

});