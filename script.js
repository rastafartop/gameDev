let input = document.querySelector("#email_input");
let button = document.querySelector("#mybutton");

button.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(input.value);
  input.value = "";
});
