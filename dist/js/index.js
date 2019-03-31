"use strict";
;
var createInputElement = function (inputValue) {
    var inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = inputValue;
    inputElement.className = 'edit-input';
    inputElement.setAttribute('style', 'display: none');
    return inputElement;
};
var updateTodo = function (selectInputElement, selectSpanElement) {
    selectSpanElement.innerText = selectInputElement.value;
};
var getCompleteButton = function () {
    var completeButton = document.createElement('button');
    completeButton.innerText = 'Mark Complete';
    completeButton.className = 'complete-button';
    return completeButton;
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
    var markCompleteButton = getCompleteButton();
    var inputElement = createInputElement(inputData.title);
    if (todoList !== null) {
        todoList.appendChild(listElement);
        listElement.appendChild(inputElement);
        listElement.appendChild(updateButton.getUpdateButton());
        listElement.appendChild(editButton.getEditButton());
        listElement.appendChild(markCompleteButton);
        listElement.appendChild(deleteButton.getDeleteButton());
        var selectInputElement_1 = listElement.querySelector('input.edit-input');
        var selectUpdateButton_1 = listElement.querySelector('button.update-button');
        var selectEditButton_1 = listElement.querySelector('button.edit-button');
        var selectCompleteButton_1 = listElement.querySelector('button.complete-button');
        var selectDeleteButton = listElement.querySelector('button.delete-button');
        var selectSpanElement_1 = listElement.querySelector('span');
        selectCompleteButton_1.addEventListener('click', function () {
            if (selectCompleteButton_1.innerText !== 'Mark Incomplete') {
                selectCompleteButton_1.innerText = 'Mark Incomplete';
                selectSpanElement_1.setAttribute('style', 'text-decoration: line-through');
                return;
            }
            selectCompleteButton_1.innerText = 'Mark Complete';
            selectSpanElement_1.setAttribute('style', 'text-decoration: none');
        });
        selectUpdateButton_1.addEventListener('click', function () {
            updateTodo(selectInputElement_1, selectSpanElement_1);
            selectUpdateButton_1.setAttribute('style', 'display: none');
            inputElement.setAttribute('style', 'display: none');
            selectCompleteButton_1.setAttribute('style', 'display: inline-block');
            selectSpanElement_1.setAttribute('style', 'display: block');
            selectEditButton_1.setAttribute('style', 'display: inline-block');
        });
        selectEditButton_1.addEventListener('click', function () {
            selectCompleteButton_1.setAttribute('style', 'display: none');
            selectSpanElement_1.setAttribute('style', 'display: none');
            selectEditButton_1.setAttribute('style', 'display: none');
            selectInputElement_1.setAttribute('style', 'display: block');
            selectUpdateButton_1.setAttribute('style', 'display: inline-block');
        });
        selectDeleteButton.addEventListener('click', function () {
            listElement.parentNode.removeChild(listElement);
        });
    }
};
window.addEventListener('DOMContentLoaded', function () {
    var appTitle = {
        user: {
            name: 'Greg',
            appName: 'Todo List',
        }
    };
    document.getElementsByTagName('h1')[0].innerText = "Welcome to " + appTitle.user.name + "'s simple TypeScript " + appTitle.user.appName + " App";
    var form = document.getElementById('todo-form');
    if (form !== null) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var inputData = getInputData(form);
            if (inputData.title === '') {
                return;
            }
            clearInputAfterSubmit(form);
            postTodo(inputData);
        });
    }
});
