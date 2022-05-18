function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

function  updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const previousTotalText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;

}

function updateBalance(amount){
    const balanceTag = document.getElementById("balance-total");
    const previousBalanceText = balanceTag.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalance = previousBalance + amount;
    balanceTag.innerText = newBalance;
}

document.getElementById("deposit-button").addEventListener("click", function(){
    const depositAmount = getInputValue("deposit-input");
    updateTotal("deposit-total", depositAmount);
    updateBalance(depositAmount);
});
/*== Deposit Update End == */

document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawAmount = getInputValue("withdraw-input");
    updateTotal("withdraw-total", withdrawAmount);

});