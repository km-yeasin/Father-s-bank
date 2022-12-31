// Deposit Container
document.getElementById('deposit-btn').addEventListener('click', function(){
    // Catch Deposit input field value
    const depositInput=document.getElementById('depo-input');
    const depositInputValue=depositInput.value;
    const totalDepositMoney=parseFloat(depositInputValue);
    // Deposite Container
    const depositContainer=document.getElementById('deposit-container');
    const depositContainerValue=depositContainer.innerText;
    const totalDepositContainer=parseFloat(depositContainerValue)
    //Total Deposit ammount
    const totalDeposit=totalDepositMoney+totalDepositContainer;
    depositContainer.innerText=totalDeposit;
    //Empty the input field
    depositInput.value='';
    // Add deposit to Balance
    const balanceContainer=document.getElementById('balance-container');
    const balanceContainerText=balanceContainer.innerText;
    const totalBalanceContainer=parseFloat(balanceContainerText);
    //Total Balance
    const totalBalance=totalDepositMoney+totalBalanceContainer;
    balanceContainer.innerText=totalBalance;
})

//Withdraw money calculation
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //Get Withdraw Field Value
    const withdrawField=document.getElementById('withdraw-field');
    const withdrawFieldValue=withdrawField.value;
    const newWithdraw=parseFloat(withdrawFieldValue);
    //Get withdraw container Text
    const withdrawContainer=document.getElementById('withdraw-container');
    const withdrawContainerText=withdrawContainer.innerText;
    const previousWithdraw=parseFloat(withdrawContainerText);
    //Total Withdraw container
    const totalWithdraContainer=newWithdraw+previousWithdraw;
    withdrawContainer.innerText=totalWithdraContainer;
    //Update Remaining balance After withdraw
    const balanceContainer=document.getElementById('balance-container');
    const balanceContainerText=balanceContainer.innerText;
    const previousBalance=parseFloat(balanceContainerText);
    //Calculation
    const remainingBalance=previousBalance-newWithdraw;
    balanceContainer.innerText=remainingBalance;
    //Empty the Field
    withdrawField.value='';
})