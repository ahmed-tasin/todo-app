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



    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.className =
    "bg-green-400 text-black px-3 py-1 rounded hover:bg-green-500 mr-2";
    editBtn.onclick = () => editTodo(span);



    const delBtn = document.createElement("button");
    delBtn.innerHTML = "🗑️";
    delBtn.className = "bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700";
    delBtn.onclick = () => li.remove();


    const btnGroup = document.createElement("div");
    btnGroup.className = "flex gap-2";
    btnGroup.append(doneBtn, editBtn, delBtn);

    li.append(span, btnGroup);
    list.appendChild(li);

}
