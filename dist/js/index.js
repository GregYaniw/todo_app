"use strict";
;
var createInputElement = function (inputValue) {
    var inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = inputValue;
    inputElement.setAttribute('style', 'display: none');
    return inputElement;
};
var UpdateButton = /** @class */ (function () {
    function UpdateButton(button) {
        this.button = button;
    }
    UpdateButton.prototype.getUpdateButton = function () {
        var updateButton = document.createElement('button');
        updateButton.innerText = this.button;
        updateButton.className = 'update-button';
        updateButton.setAttribute('style', 'display: none');
        return updateButton;
    };
    return UpdateButton;
}());
var EditButton = /** @class */ (function () {
    function EditButton(button) {
        this.button = button;
    }
    EditButton.prototype.getEditButton = function () {
        var editButton = document.createElement('button');
        editButton.innerText = this.button;
        editButton.className = 'edit-button';
        return editButton;
    };
    return EditButton;
}());
var DeleteButton = /** @class */ (function () {
    function DeleteButton(button) {
        this.button = button;
    }
    DeleteButton.prototype.getDeleteButton = function () {
        var deleteButton = document.createElement('button');
        deleteButton.innerText = this.button;
        deleteButton.className = 'delete-button';
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
    var spanElement = document.createElement('span');
    var spantext = document.createTextNode(inputData.title);
    spanElement.appendChild(spantext);
    listElement.appendChild(spanElement);
    var todoList = document.getElementById('todo-list');
    var updateButton = new UpdateButton('Update');
    var editButton = new EditButton('Edit');
    var deleteButton = new DeleteButton('X');
    var inputElement = createInputElement(inputData.title);
    if (todoList !== null) {
        todoList.appendChild(listElement);
        listElement.appendChild(inputElement);
        listElement.appendChild(updateButton.getUpdateButton());
        listElement.appendChild(editButton.getEditButton());
        listElement.appendChild(deleteButton.getDeleteButton());
        var selectUpdateButton_1 = listElement.querySelector('button.update-button');
        var selectEditButton_1 = listElement.querySelector('button.edit-button');
        var selectDeleteButton = listElement.querySelector('button.delete-button');
        var selectSpanElement_1 = listElement.querySelector('span');
        selectUpdateButton_1.addEventListener('click', function () {
        });
        selectEditButton_1.addEventListener('click', function () {
            listElement.insertBefore(inputElement, listElement.childNodes[0]);
            selectSpanElement_1.setAttribute('style', 'display: none');
            selectEditButton_1.setAttribute('style', 'display: none');
            selectUpdateButton_1.setAttribute('style', 'display: inline-block');
        });
        selectDeleteButton.addEventListener('click', function () {
            listElement.parentNode.removeChild(listElement);
        });
    }
};
window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('todo-form');
    if (form !== null) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var inputData = getInputData(form);
            clearInputAfterSubmit(form);
            postTodo(inputData);
        });
    }
});
