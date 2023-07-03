const inputE1 = document.querySelector(".input");
const formE1 = document.querySelector(".form");
const paraE1 = document.getElementsByTagName("p")[0];
const btnE1 = document.querySelector(".btn");

inputE1.style.color = "green";

// formE1.addEventListener("submit", info);
btnE1.addEventListener("click", info);

function info(event) {
  console.log(inputE1.value);
  paraE1.innerHTML = inputE1.value;
  paraE1.style.color = "red";
  event.preventDefault();

  if (inputE1.value != "") {
    alert("Your form has submitted successfully");
  }
  inputE1.value = "";
}
inputE1.addEventListener("mouseover", function () {
  inputE1.style.backgroundColor = "pink";
});
inputE1.addEventListener("click", function () {
  inputE1.style.backgroundColor = "";
});
inputE1.addEventListener("mouseleave", function () {
  inputE1.style.backgroundColor = "";
});

btnE1.addEventListener("mouseenter", function () {
  btnE1.style.backgroundColor = "lime";
});
btnE1.addEventListener("mouseleave", function () {
  btnE1.style.backgroundColor = "";
});

const hE1 = document.getElementsByTagName("h2")[0];

hE1.addEventListener("mouseenter", function () {
  hE1.classList.add("heading");
  hE1.innerHTML = "Hey , write somthing ";
});
hE1.addEventListener("mouseleave", function () {
  hE1.classList.remove("heading");
  hE1.innerHTML = "Write something here";
});

formE1.addEventListener("click", function () {
  formE1.style.backgroundColor = "yellow";
});
formE1.addEventListener("dblclick", function () {
  formE1.style.backgroundColor = "";
});
