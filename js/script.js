
function checkIfPasswordsEqual() {
    let passField = document.querySelector('#password');
    let pass = passField.value;
    let checkPassField = document.querySelector('#confirmPassword');
    let checkPass = checkPassField.value;

    if(pass != checkPass) {
        if(!checkPassField.classList.contains('error')) {
            checkPassField.classList.add('error');
        }
        if(!passField.classList.contains('error')) {
            passField.classList.add('error');
            passField.setCustomValidity('Passwords are not Equal.');
            let notEqualPass = document.createElement("p");
            notEqualPass.classList.add('notequal');
            notEqualPass.textContent = '* Passwords do not match';
            document.querySelector('.passwordField').appendChild(notEqualPass);        
        }
    } else {
        if(checkPassField.classList.contains('error')) {
            checkPassField.classList.remove('error');
        }
        if(passField.classList.contains('error')) {
            passField.classList.remove('error');
            passField.setCustomValidity('');
            let notEqualPass = document.querySelector('.notequal');
            document.querySelector('.passwordField').removeChild(notEqualPass);
        }
    }
}