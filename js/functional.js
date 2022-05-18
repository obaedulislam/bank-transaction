function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function updateTotal(fieldId, amount) {
    const totalTag = document.getElementById(fieldId);
    const previousTotalText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;

}

function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById("balance-total");
    const previousBalanceText = balanceTag.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    let newBalance;
    if(isAdding == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
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
    if(withdrawAmount > 0){
        updateTotal("withdraw-total", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }


});