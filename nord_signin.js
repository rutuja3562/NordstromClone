document.querySelector("form").addEventListener("submit", formSubmit);
var userStack = JSON.parse(localStorage.getItem("userItem")) || [];
function formSubmit(event) {
  event.preventDefault();
  // console.log("hii");

  email = document.querySelector("#email").value;
  pass = document.querySelector("#pass").value;
  name = document.querySelector("#name").value;
  mob = document.querySelector("#mob").vlue;

  userData = {
    useremail: email,
    userpass: pass,
    username: name,
    usermob: mob,
  };
  userStack.push(userData);
  //console.log(userStack);
  localStorage.setItem("userItem", JSON.stringify(userStack));
  alert("Signup Successfully");
  window.location.href = "nord_login.html";
}
