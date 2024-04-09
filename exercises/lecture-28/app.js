const registrationForm = document.getElementById('registrationForm');
const errorMessages = document.getElementById('errorMessages');

function validEmail(email) {
    return /^[^\s@] + @[^\s@] + \.[^\s@] + $/.test(email);
}

function validPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password);
}


registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    errorMessages.innerHTML = " ";

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(!username) {
        displayError("Username is required");
        return;
    }

    
    if(!email) {
        displayError("Email is required");
    } else if (!validEmail(email)) {
        displayError("Invalid email format");
        return;
    }

    if(!password) {
        displayError("Password is required");
        return;
    } else if(password.length < 8) {
        displayError("Password must be at least 8 characters long");
        return;
    } else if(!validPassword(password)) {
        displayError("Password must contain at least one uppercase letter(A-Z), one lowercase letter(a-z), one digit(0-9) and one special character(@!#;)");
        return;
    }

    registrationForm.submit();
});


function displayError(message) {
    errorMessages.innerHTML += `<div class="error"> ${message} </div>`;
}

