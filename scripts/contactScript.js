// Form validation for contact page
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formFeedback = document.getElementById("formFeedback");

    let isValid = true;

    // Reset error messages and styles
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formFeedback.textContent = "";
    nameInput.classList.remove("invalid");
    emailInput.classList.remove("invalid");
    messageInput.classList.remove("invalid");
    formFeedback.classList.remove("success", "error");

    // name validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name) {
        nameError.textContent = "Name is required.";
        nameInput.classList.add("invalid");
        isValid = false;
    } else if (!nameRegex.test(name)) {
        nameError.textContent = "Name must contain only letters and spaces.";
        nameInput.classList.add("invalid");
        isValid = false;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = "Email is required.";
        emailInput.classList.add("invalid");
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.classList.add("invalid");
        isValid = false;
    }

    // message validation
    if (!message) {
        messageError.textContent = "Message is required.";
        messageInput.classList.add("invalid");
        isValid = false;
    } else if (message.length > 500) {
        messageError.textContent = "Message must not exceed 500 characters.";
        messageInput.classList.add("invalid");
        isValid = false;
    }

    // If validation passes, send data to backend API
    if (isValid) {
        formFeedback.textContent = "Submitting...";
        formFeedback.classList.add("success");

        fetch("https://purepetnutrition-gjecgvaxgmgtcfcc.australiaeast-01.azurewebsites.net/api/contact.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formFeedback.textContent = data.message;
                    formFeedback.classList.add("success");
                    formFeedback.classList.remove("error");
                    this.reset();
                } else {
                    formFeedback.textContent = data.message || "Something went wrong. Please try again.";
                    formFeedback.classList.add("error");
                    formFeedback.classList.remove("success");
                }
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                formFeedback.textContent = "Server error. Please try again later.";
                formFeedback.classList.add("error");
            });
    } else {
        formFeedback.textContent = "Please fix the errors above.";
        formFeedback.classList.add("error");
    }
});
