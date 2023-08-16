const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const isValidEmail = (email) => {
  const re = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return re.test(String(email).toLowerCase)
};
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();
  if (usernameValue === "") {
    setError(username, "username is required");
  } else {
    setSuccess(username);
  }
  if (emailValue == "") {
    setError(email, "Email is required");
  }
  else if(!isValidEmail(emailValue)){
    setError(email, "Provide a valid email adress");

  }
  else{
    setSuccess(username);

  }
  if(passwordValue===''){
    setError(password, "password is required");
  }
  else if(passwordValue.length<8){
    setError(password,"Password must be at least 68 characters long")
  }
  else{
    setSuccess(password)
  }
  if(passwordValue2===''){
    setError(password2, "Please confirm your password ");
  }
  else if(passwordValue2!==passwordValue){
    setError(password2,"Password does not match")
  }
  else{
    setSuccess(password2)
  }
};
