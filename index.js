
document.querySelector("form").addEventListener("submit", addTodo);

function addTodo(event) {
    event.preventDefault();
    const item = document.createElement("li");
    item.innerText = document.getElementById("item").value;

    const list = document.querySelector("ul");
    list.appendChild(item);

}