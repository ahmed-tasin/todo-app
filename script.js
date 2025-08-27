const todoForm = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
    addTodo(text);
    input.value = "";
}
});


function addTodo(text) {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-white p-3 rounded";

    const span = document.createElement("span");
    span.textContent = text;
    span.className = "flex-grow text-black";


    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "✔️";
    doneBtn.className =
    "bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 mr-2";
    doneBtn.onclick = () => {
    span.classList.toggle("line-through");
    span.classList.toggle("opacity-50");
};








