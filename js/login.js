const userName = "rifath123";
const password = "rifath_123";
const submit = document.querySelector('.submit');
const inputUserName = document.querySelector('.login-user')
const inputPassword = document.querySelector('.login-password')

submit.addEventListener('click',(event)=>{
    event.preventDefault();
    const name = String(inputUserName.value);
    const pass = String(inputPassword.value);
    // console.log(name);

    if (name === userName && pass === password) {
        window.location.href = "./dashboard.html";
    } else {
        alert("Invalid credentials");
    }
})
