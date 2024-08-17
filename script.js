
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Set last updated date
    const lastUpdatedElement = document.getElementById('last-updated');
    const lastUpdated = document.lastModified;
    lastUpdatedElement.textContent = lastUpdated;
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check (replace with more secure method in production)
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
        // Redirect to the hidden page
        window.location.href = 'hidden.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
