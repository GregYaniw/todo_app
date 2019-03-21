interface Todo {
	title: string;
};

let getInputData = (form:HTMLElement): Todo => {
	let inputElement: HTMLInputElement|null = form.querySelector('input[type="text"]');
	let inputValue: string = inputElement ? inputElement.value : '';

	return { title: inputValue };
};

let clearInputAfterSubmit = (form:HTMLElement) => {
	let inputElement: HTMLInputElement|null = form.querySelector('input[type="text"]');

	if (inputElement !== null) {
		inputElement.value = "";
	}
};

let postTodo = (inputData: Todo) => {
	let listElement = document.createElement('li');
	listElement.innerText = inputData.title;
	let todoList = document.getElementById('todo-list')
	if (todoList !== null) {
		todoList.appendChild(listElement);
	}
};

window.addEventListener('DOMContentLoaded', () => {
	console.log('content loaded');

	let form: HTMLElement|null = document.getElementById('todo-form');
	console.log('form', form);

	if (form !== null) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			let inputData = getInputData(<HTMLElement>form);
			console.log('form submitted', inputData);
			clearInputAfterSubmit(<HTMLElement>form);
			postTodo(inputData);
		});
	}
});