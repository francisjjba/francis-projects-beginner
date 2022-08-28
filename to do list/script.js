// const button = document.querySelector(".addbutton");

// button.addEventListener("click", buttondata());

// var button = document.getElementById("addbutton");
// button.onclick = alertMe();

// function alertMe() {
//   alert("Please enter your email address");
//   console.log("Please enter your email address");
// }
window.onload = function() {
  const form1=document.querySelector(".addform")
  let items = document.querySelector("items");
  let submit = document.querySelector("addbutton");
  let editItem = null;

  form1.addEventListener("submit", addItem);
  items.addEventListener("click", removeItem);
}

function addItem(e) {
  e.preventDefault();
  

  if (submit.value != "Submit") {
    console.log("Hello");

   