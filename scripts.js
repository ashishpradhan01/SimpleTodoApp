var todoTextArea = document.getElementById("todo-textarea")
var warningText = document.getElementById("warning-text")
var boxTodo = document.getElementsByClassName("box-todos")[0]
var todoDoneBtn = document.getElementById("todo-done")
var todoDeleteBtn = document.getElementById("todo-delete")
var index = 0
var todoList = []
warningText.innerText = ""

class Todo {
    constructor(todoText, key) {
        this.key = key
        this.todoText = todoText
        this.item = `<div class="item"><span class="todo-title">${this.todoText}</span><div class="item-action"><img onclick="doneItemFromList(${this.key})" id="todo-done" src="check.png"/><img onclick="deleteItemFromList(${this.key})" id="todo-delete" src="delete.png"/></div></div>`
    }
}

async function update(){
    if(todoList.length !== 0) {
        boxTodo.innerHTML = ""
        let index = 0;
        while(index < todoList.length) {
            boxTodo.innerHTML += todoList[index].item
            index++
        }
    }
}

function insertTodo() {
    if(todoTextArea.value === "") {
        warningText.innerText = "Todo can't be empty!!"
    }
    else {
        warningText.innerText = ""
        todoList.push(new Todo(todoTextArea.value, index))
        index++
        todoTextArea.value = ""
    }
    update()
}

function doneItemFromList(key) {
    todoList.forEach(ele => {
        if(ele.key === key) {
            ele.item = `<div class="item"><span class="todo-title"><strike>${ele.todoText}</strike></span><img onclick="deleteItemFromList(${key})" id="todo-delete" src="delete.png"/></div></div>` 
        }
    });
    update()
}

function deleteItemFromList(key) {
    if(todoList.length ===1) {
        boxTodo.innerHTML = ""
        todoList = []
        index = 0
    }
    todoList.forEach(ele => {
        if(ele.key === key) {
            let index = todoList.indexOf(ele)
            todoList.splice(index, 1);
        }
    });
    update()
}

