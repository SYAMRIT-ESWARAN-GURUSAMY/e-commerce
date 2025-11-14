document.addEventListener('DOMContentLoaded', () => {

    // --- Login/Registration Form Validation ---
    // We check which form is on the current page
    
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            // 1. PREVENT THE DEFAULT HTML SUBMISSION
            e.preventDefault(); 
            
            // 2. RUN VALIDATION
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const loginError = document.getElementById('loginError');
            loginError.textContent = '';
            
            if (password.length < 8) {
                loginError.textContent = 'Password must be at least 8 characters.';
                return; // Stop execution
            }

            // 3. THIS IS WHERE A REAL SITE SENDS DATA TO THE SERVER
            console.log('Sending login data to server:', email, password);
            
            // **Demo Only**: Simulate a successful login and redirect
            alert('DEMO: Login successful! Redirecting to account page...');
            window.location.href = 'account.html'; 
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // ... Add validation logic for registration ...
            // Check for password match, etc.
            
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // **Demo Only**: Simulate successful registration
            alert('DEMO: Registration successful! Redirecting to login page...');
            window.location.href = 'login.html';
        });
    }
    
    // **Demo Only**: This JS would "fake" the logged-in state.
    // In a real site, the server would send the correct HTML already.
    if (window.location.pathname.includes('account.html') || window.location.pathname.includes('index.html')) {
        // Let's pretend the user is logged in for this demo
        const authLinks = document.getElementById('auth-links');
        const userMenu = document.getElementById('user-account-menu');
        
        if(authLinks && userMenu) {
            // You can manually toggle this in your browser console to test
            // authLinks.style.display = 'none';
            // userMenu.style.display = 'list-item';
        }
    }
});