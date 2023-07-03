const numE1 = document.querySelector(".heading");

var index = 0;

console.log(numE1.innerHTML);
const InE1 = document.querySelector("#btn1");
const DeE1 = document.querySelector("#btn2");

InE1.addEventListener("click", function () {
  index++;
  numE1.innerHTML = index;
});
DeE1.addEventListener("click", function () {
  index--;
  numE1.innerHTML = index;
});
