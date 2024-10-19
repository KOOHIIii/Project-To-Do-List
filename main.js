// function output_t() {
//   // get value of input box.
//   let x = document.getElementById("input_t").value;

//   document.getElementById("text").innerHTML = x;
// }
// function clearData() {
//   document.getElementById("text").innerHTML = " ";
// }
function addElement() {
  // get value of inputbox store in x varible
  let x = document.getElementById("input_t").value;
  // create varible "taxkList" for store function create paragraph (DOM HTML)-create element
  const taskList = document.createElement("p");
  // set text in <p></p> is we juse created
  taskList.innerText = x;
  // push tag P in box for output ID_name = bxx (create child tag)
  document.getElementById("bxx").appendChild(taskList);
  // set value of input text box to null
  document.getElementById("input_t").value = " ";

  taskList.addEventListener("click", function () {
    taskList.style.textDecoration = "line-through";
  });
  taskList.addEventListener("dblclick", function () {
    taskList.remove();
  });
}
function clearData() {
  window.location.reload();
}
