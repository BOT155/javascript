var btnsignin = window.document.getElementById('signin');
var btnsignup = window.document.getElementById('signup');

var body = window.document.querySelector("body");

btnsignin.addEventListener("click", function () {
    body.className = "sign-in-js";
});
btnsignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});