interface Todo {
	title: string;
};

class DeleteButton {
	button: string;

	constructor(button: string, ) {
		this.button = button;
	}

	getButton(): HTMLButtonElement {
		let deleteButton = document.createElement('button');
		deleteButton.innerText = this.button;
		return deleteButton;
	}
}

let getInputData = (form: HTMLElement): Todo => {
	let inputElement: HTMLInputElement|null = form.querySelector('input[type="text"]');
	let inputValue: string = inputElement ? inputElement.value : '';

	return { title: inputValue };
};

let clearInputAfterSubmit = (form: HTMLElement) => {
	let inputElement: HTMLInputElement|null = form.querySelector('input[type="text"]');

	if (inputElement !== null) {
		inputElement.value = "";
	}
};

let postTodo = (inputData: Todo) => {
	let listElement = document.createElement('li');
	listElement.innerText = inputData.title;
	let todoList = document.getElementById('todo-list');

	let deleteButton = new DeleteButton('X');

	if (todoList !== null) {
		todoList.appendChild(listElement);
		listElement.appendChild(deleteButton.getButton());
		listElement.querySelector('button').addEventListener('click', () => {
			listElement.parentNode.removeChild(<HTMLElement>listElement);
		});
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
			clearInputAfterSubmit(<HTMLElement>form);
			postTodo(inputData);
		});
	}

	//let deleteTodo = document.ge
});