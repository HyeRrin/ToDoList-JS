const $toDoForm = document.getElementById("todo-form");
const $toDoInput = document.querySelector("#todo-form input");
const $toDoList = document.getElementById("todo-list");

function makeList(event) {
  event.preventDefault();
  let li = document.createElement("li");
  let div = document.createElement("div");
  let btn = document.createElement("button");
  div.innerText = $toDoInput.value;
  btn.innerText = "삭제";
  li.appendChild(div);
  li.appendChild(btn);
  $toDoList.appendChild(li);
}
$toDoForm.addEventListener("submit", makeList);
