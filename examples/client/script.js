const GET_ALL = `https://dummyjson.com/todos?limit=150`
const CREATE_TODO = "https://dummyjson.com/todos/add"

const todoParent = document.querySelector("#todos")

function createTodoElement (parent, status, text) {
    const todoEl = document.createElement("label")
    const checkEl = document.createElement("input")
    const textEl = document.createElement("span")

    todoEl.classList.add("todo-item")
    checkEl.type = "checkbox"
    checkEl.checked = status
    textEl.innerText = text;

    todoEl.appendChild(checkEl)
    todoEl.appendChild(textEl)

    parent.appendChild(todoEl)
}

function updateTodo(id) { 
    fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                completed: true,
              })
        })
        .then(res => res.json())
        .then(console.log);
}

function getAllTodos() {
    fetch(GET_ALL)
        .then(res => res.json())
        .then(json => {
            const todos = json.todos
            todos.forEach(todo => {
                createTodoElement(todoParent, todo.completed, todo.todo)
            })
            console.log(json)
        })
}

function getTodoById(id) {
    fetch(`${GET_ALL}/user/${id}`)
        .then(res => res.json())
        .then(json => console.log("Получена", json))
}

function createTodo(todo) {
    fetch(CREATE_TODO, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo,
            completed: false,
            userId: 5
        })
    })
        .then(res => res.json())
        .then(json => console.log("Создана задача", json))
}

const todoForm = document.querySelector("#todo-form")
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const todoInput = event.target[0]
    const todoText = todoInput.value

    todoInput.value = "";

    createTodo(todoText)
})

const getButton = document.querySelector("#get-todos")
getButton.addEventListener("click", () => {
    getTodoById(5)
})

getAllTodos()