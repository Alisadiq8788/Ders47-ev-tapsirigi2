let input = document.querySelector("input");
let todoBody = document.querySelector(".todo-body");

function add() {
  let p = document.createElement("p");
  let span = document.createElement("span");
  span.innerHTML = "X";

  p.innerHTML = input.value ;
  p.append(span)
  p.classList.add("item");
  p.setAttribute("title", input.value);

  todoBody.append(p);
  input.value = "";
}