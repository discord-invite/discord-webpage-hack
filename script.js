document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');

    // Log password to console as user types
    passwordInput.addEventListener('input', function () {
        console.log('Password entered:', this.value);
    });

    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.textContent = '🔒';
        } else {
            passwordInput.type = 'password';
            this.textContent = '';
        }
    });

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Log final values before submission
        console.log('Form submission attempted:');
        console.log('Email:', email);
        console.log('Password:', password);

        // Always show error message regardless of input
        alert('Invalid email or password. Please try again.');

        // Clear password field
        document.getElementById('password').value = '';
    });
});