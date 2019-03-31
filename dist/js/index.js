"use strict";
;
var DeleteButton = /** @class */ (function () {
    function DeleteButton(button) {
        this.button = button;
    }
    DeleteButton.prototype.getButton = function () {
        var deleteButton = document.createElement('button');
        deleteButton.innerText = this.button;
        return deleteButton;
    };
    return DeleteButton;
}());
var getInputData = function (form) {
    var inputElement = form.querySelector('input[type="text"]');
    var inputValue = inputElement ? inputElement.value : '';
    return { title: inputValue };
};
var clearInputAfterSubmit = function (form) {
    var inputElement = form.querySelector('input[type="text"]');
    if (inputElement !== null) {
        inputElement.value = "";
    }
};
var postTodo = function (inputData) {
    var listElement = document.createElement('li');
    listElement.innerText = inputData.title;
    var todoList = document.getElementById('todo-list');
    var deleteButton = new DeleteButton('X');
    if (todoList !== null) {
        todoList.appendChild(listElement);
        listElement.appendChild(deleteButton.getButton());
        listElement.querySelector('button').addEventListener('click', function () {
            listElement.parentNode.removeChild(listElement);
        });
    }
};
window.addEventListener('DOMContentLoaded', function () {
    console.log('content loaded');
    var form = document.getElementById('todo-form');
    console.log('form', form);
    if (form !== null) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var inputData = getInputData(form);
            clearInputAfterSubmit(form);
            postTodo(inputData);
        });
    }
    //let deleteTodo = document.ge
});
