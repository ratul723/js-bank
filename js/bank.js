document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password
    const passField = document.getElementById('user-password');
    const userPass = passField.value;

    //check mail and pass
    if (userEmail == 'abc@gmail.com' && userPass == 'secret') {
        window.location.href = 'banking.html'
    }
    else {
        console.log('Invalid password');
    }
})

