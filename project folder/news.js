"use strict";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit");
const toast = document.getElementById("toast");

emailInput.style.color = "rgb(54, 53, 53)";
emailInput.style.fontWeight = "640";

submitButton.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();

  if (emailRegex.test(emailValue)) {
    // Valid email format
    emailInput.style.backgroundColor = "lightgreen";
    emailInput.style.border = "2px solid green";
    // Change background color

    showToast("Email is valid!");
    toast.style.border = "2px solid green";
    toast.style.color = "black";
    toast.style.backgroundColor = "lightgreen";

    // Redirect to another HTML file
    window.location.href = "success.html"; // Change "success.html" to your target HTML file
  } else {
    // Invalid email format
    emailInput.style.backgroundColor = "lightcoral";
    emailInput.style.color = "red";
    emailInput.style.border = "2px solid red";

    // Change background color
    showToast("Please enter a valid email address.");
    toast.style.border = "2px solid red";
    toast.style.backgroundColor = "lightcoral";
    // Display error pop-up message
  }

  // function showToast(message) {
  //   toast.textContent = message;
  //   toast.style.opacity = 1;
  //   setTimeout(() => {
  //     toast.style.opacity = 0;
  //   }, 3000);
  // }

  // Reset background color after 1 second (optional)
  setTimeout(() => {
    emailInput.style.backgroundColor = "var(--off-white: hsl(0, 0%, 100%);)";
  }, 1000);
});
function showToast(message) {
  toast.textContent = message;
  toast.style.display = "block";
  toast.style.opacity = 1;

  // Hide the toast after 3 seconds (adjust timing as needed)
  setTimeout(() => {
    toast.style.opacity = 0;
    toast.style.display = "none";
  }, 1000);
}
