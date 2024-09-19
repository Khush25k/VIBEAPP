document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Store user data in Local Storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Sign up successful! Please log in.');
    // Redirect to the login page
    window.location.href = 'index.html';
});
