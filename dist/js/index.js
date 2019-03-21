"use strict";
;
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
window.addEventListener('DOMContentLoaded', function () {
    console.log('content loaded');
    var form = document.getElementById('todo-form');
    console.log('form', form);
    if (form !== null) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var inputData = getInputData(form);
            console.log('form submitted', inputData);
            clearInputAfterSubmit(form);
        });
    }
});
