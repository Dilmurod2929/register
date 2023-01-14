const userL = document.querySelector(".loginuser");
const passwordL = document.querySelector(".loginpassword");
const btnL = document.querySelector(".loginBtn");

btnL.addEventListener("click", (e) => {
  let textuser = userL.value;
  let textpassword = passwordL.value;
  let password = localStorage.getItem(textuser);
});
