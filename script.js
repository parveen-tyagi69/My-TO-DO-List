let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let unOrderList = document.getElementById("unOrderList");

myButton.addEventListener("click", function () {
  let input = myInput.value.trim();

  if (input === "") {
    alert("you must write something");
    return;
  }
  const list = document.createElement("li");
  const dltBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  dltBtn.innerHTML = '<i class="fas fa-trash"></i>';
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  list.classList.add("task-item");
dltBtn.classList.add("delete-btn");
checkBtn.classList.add("check-btn");

  list.innerText = input;
  list.appendChild(checkBtn);

  list.appendChild(dltBtn);
  unOrderList.appendChild(list);
  checkBtn.addEventListener("click", function (event) {
    list.classList.toggle("completed");
    event.stopPropagation();
  });

  
  dltBtn.addEventListener("click", function (event) {
    list.remove();
    event.stopPropagation();
  });

  myInput.value = "";
});
