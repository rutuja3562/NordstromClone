document.querySelector("form").addEventListener("submit", signin);
var regdusers = JSON.parse(localStorage.getItem("userItem")) || [];
function signin(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var pass = document.querySelector("#pass").value;

  for (var i = 0; i < regdusers.length; i++) {
    //console.log(regdusers.length)
    if (regdusers[i].username == name && regdusers[i].userpass == pass) {
      // console.log("hii")
      // alert("Login Success")
      window.location.href = "laning_page2.html";
    }
  }
}
