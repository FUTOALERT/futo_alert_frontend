const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '' || password === '') {
        errorMsg.textContent = 'Please fill in all fields';
        return;
    }

    // TO DO: Implement authentication logic here
    // For demonstration purposes, assume authentication is successful
    if (email === 'admin' && password === 'password') {
        window.location.href = 'dashboard.html';
    } else {
        errorMsg.textContent = 'Invalid username or password';
    }
});