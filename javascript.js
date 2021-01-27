// In this project we will write code elaborately and then we will organized and minimized it by using function. 

// Login Area
// const loginBtn = document.getElementById('login');
// loginBtn.addEventListener('click', function(){
//     console.log('Login clicked');
// });

const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function(){
    const submitArea  = document.getElementById("login-area");
    submitArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
