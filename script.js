"use strict";

const form = document.querySelector("form");
const email = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const error = document.querySelector(".error");

  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  console.log(email.value);

  if (email.value.match(validRegex)) {
    email.style.border = "1px solid var(--pale-blue)";
    error.style.display = "none";
  } else {
    email.style.border = "1px solid var(--light-red)";
    error.style.display = "block";
  }
});
