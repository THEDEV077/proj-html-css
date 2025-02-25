document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.style.display = 'none';
    });

    // Validate First Name
    const firstName = document.getElementById('first-name').value;
    if (firstName.trim() === '') {
        isValid = false;
        document.getElementById('first-name-error').textContent = 'First Name is required';
        document.getElementById('first-name-error').style.display = 'block';
    }

    // Validate Last Name
    const lastName = document.getElementById('last-name').value;
    if (lastName.trim() === '') {
        isValid = false;
        document.getElementById('last-name-error').textContent = 'Last Name is required';
        document.getElementById('last-name-error').style.display = 'block';
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Invalid email address';
        document.getElementById('email-error').style.display = 'block';
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        isValid = false;
        document.getElementById('password-error').textContent = 'Password is required';
        document.getElementById('password-error').style.display = 'block';
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        document.getElementById('phone-error').textContent = 'Invalid phone number';
        document.getElementById('phone-error').style.display = 'block';
    }

    // Validate Gender
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        isValid = false;
        document.getElementById('gender-error').textContent = 'Gender is required';
        document.getElementById('gender-error').style.display = 'block';
    }

    // Validate Date of Birth
    const dob = document.getElementById('dob').value;
    if (dob.trim() === '') {
        isValid = false;
        document.getElementById('dob-error').textContent = 'Date of Birth is required';
        document.getElementById('dob-error').style.display = 'block';
    }

    // Validate Profile Picture
    const picture = document.getElementById('picture').files[0];
    if (!picture) {
        isValid = false;
        document.getElementById('picture-error').textContent = 'Profile Picture is required';
        document.getElementById('picture-error').style.display = 'block';
    }

    if (isValid) {
        // Create FormData object to handle form submission
        const formData = new FormData();
        formData.append('first-name', firstName);
        formData.append('last-name', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('phone', phone);
        formData.append('gender', gender);
        formData.append('dob', dob);
        formData.append('picture', picture);

        // Simulate form submission (e.g., send data to the server)
        // For demonstration, we'll just log the form data
        console.log('Form Data:', formData);

        alert('Registration successful! Welcome to the website.');
    }
});