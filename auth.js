document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user data from Local Storage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        // Redirect to another page or handle login success
        window.location.href = 'music.html';
    } else {
        alert('Login failed: Incorrect email or password.');
    }
});
