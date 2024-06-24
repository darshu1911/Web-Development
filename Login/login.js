const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// TO DO: implement login logic here
	// For example, you can make an AJAX request to a server-side API
	// or use a library like Firebase to authenticate users

	if (username === 'admin' && password === 'password') {
		// Login successful, redirect to dashboard or another page
		window.location.href = 'dashboard.html';
	} else {
		errorMessage.textContent = 'Invalid username or password';
	}
});