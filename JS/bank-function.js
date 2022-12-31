//Deposite Event handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Deposit Input field
    const depoInputField = document.getElementById('depo-input');
    const getDepoInputValue = parseFloat(depoInputField.value);
    // Deposite container
    const depositContainerField=document.getElementById('deposit-container')
    const totalDepositValue=parseFloat(depositContainerField.innerText);
    // Sum the deposit with new input
    const totalDepositContainer=getDepoInputValue+totalDepositValue;
    depositContainerField.innerText=totalDepositContainer;
    // Final Balance
    const balanceContainer=document.getElementById('balance-container');
    const totalBalanceContainer=parseFloat(balanceContainer.innerText);
    const finalBalance=totalBalanceContainer+getDepoInputValue;
    // console.log(finalBalance);
    balanceContainer.innerText=finalBalance;
    //Blank the field
    depoInputField.value = '';
})
//Withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //Withdraw input field
    const withdrawInputField = document.getElementById('withdraw-field');
    const getWithdrawInputValue = parseFloat(withdrawInputField.value);
    // withdraw container
    const withdrawContainer=document.getElementById('withdraw-container');
    const totalWithdrawValue=parseFloat(withdrawContainer.innerText);
    // Calculate the total withdraw
    const totalWithdrawContainer=getWithdrawInputValue+totalWithdrawValue;
    withdrawContainer.innerText=totalWithdrawContainer;
    //Balance after withdraw
    const balanceContainer=document.getElementById('balance-container');
    const totalBalanceContainer=parseFloat(balanceContainer.innerText);
    // remaining balance
    const remainingBalance=totalBalanceContainer-getWithdrawInputValue;
    balanceContainer.innerText=remainingBalance;
    withdrawInputField.value = '';
})
