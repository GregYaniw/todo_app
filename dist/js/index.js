"use strict";
;
var getInputData = function () {
    var output = { title: 'dishes' };
    return output;
};
window.addEventListener('DOMContentLoaded', function () {
    console.log('content loaded');
    var form = document.getElementById('todo-form');
    console.log('form', form);
    if (form !== null) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var inputData = getInputData();
            console.log('form submitted', inputData);
        });
    }
});
