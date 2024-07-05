const myForm = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const output = document.querySelector(".output");
myForm.addEventListener("submit", formHandler);
function formHandler(e) {
  e.preventDefault();
  if (email.value.length === 0) {
    output.innerHTML = "Please enter your email";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
  } else if (password.value.length === 3) {
    output.innerHTML = "Please enter your password";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
  } else if (password.value.length < 5) {
    output.innerHTML = "Password cannot exceed 5 characters";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
  } else {
    output.innerHTML = "Login Successful!";
    output.style.color = "green";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    window.location.href = "Success.html";
  }
}

