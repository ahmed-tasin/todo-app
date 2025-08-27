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









