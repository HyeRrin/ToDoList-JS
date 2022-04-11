const $toDoForm = document.getElementById("todo-form");
const $toDoInput = document.querySelector("#todo-form input");
const $toDoList = document.getElementById("todo-list");

let savedToDo = [];
let preToDo = JSON.parse(localStorage.getItem("toDo"));

// localStoarge에 toDo 저장
function saveToDo() {
  savedToDo.push($toDoInput.value);
  $toDoInput.value = "";
  localStorage.setItem("toDo", JSON.stringify(savedToDo));
}

// 이전 toDo가 있다면 불러오기
if (preToDo !== null) {
  // localStorage에 추가
  for (let i = 0; i < preToDo.length; i++) {
    savedToDo.push(preToDo[i]);
  }
  // 화면 추가
  for (let i = 0; i < savedToDo.length; i++) {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let btn = document.createElement("button");
    div.innerText = savedToDo[i];
    btn.innerText = "삭제";
    li.appendChild(div);
    li.appendChild(btn);
    $toDoList.appendChild(li);
  }
}

// form을 submit 시 발생되는 함수
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
  saveToDo();
}
$toDoForm.addEventListener("submit", makeList);
