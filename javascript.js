// In this project we will write code elaborately and then we will organized and minimized it by using function. 

// Login Area
// const loginBtn = document.getElementById('login');
// loginBtn.addEventListener('click', function(){
//     console.log('Login clicked');
// });

// Add Event Listener to Login Area.(This is final code)
const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function(){
    const submitArea  = document.getElementById("login-area");
    submitArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit button event handler, capture deposit amount (--1st step--)
const depositButton = document.getElementById("depositButton");
depositButton.addEventListener("click", function(){
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber("depositAmount");
    // // capture deposit default value and apply parse float to make it complete float number.(--2nd step--)
    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = currentDepositNumber + depositNumber;
    // // Set the value
    // document.getElementById('currentDeposit').innerText = totalDeposit;
    // call the function for deposit (--6th step--)
    updateSpanText("currentDeposit", depositNumber);
    // Make the deposit input box clear by setting a empty string.
    document.getElementById("depositAmount").value = "";
    // // update balance(--3rd step--)
    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const newBalance = currentBalanceNumber + depositNumber;
    // // set updated balance
    // document.getElementById("currentBalance").innerText = newBalance;
    // call the function for balance(--5th step--)
    updateSpanText("currentBalance", depositNumber);
});
// // Though deposit and balance code are most similar. So now we will create a function and call it to reduce the code.(--4th step--)
// function updateSpanText(id, depositNumber){
//     const currentBalance = document.getElementById(id).innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     const newBalance = currentBalanceNumber + depositNumber;
//     document.getElementById(id).innerText = newBalance;
// }

// Make the function more meaningful(--7th step --)
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const newBalance = currentNumber + depositNumber;
    document.getElementById(id).innerText = newBalance;
}


// Withdraw button event handler, capture Withdraw amount(--8th step--) 
const withdrawButton = document.getElementById("withdrawButton");
withdrawButton.addEventListener("click",function(){
    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // const withdrawNumber = parseFloat(withdrawAmount);
    // call the getInput Function(--10th step)
    const withdrawNumber = getInputNumber("withdrawAmount");
    // call the function updateSpanText (--11th step--)
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    // Make the deposit input box clear by setting a empty string.
    document.getElementById("withdrawAmount").value = "";
});

// Though the input system of deposit and withdraw button are same so that we create a function to reduce code(--9th step)
function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}




