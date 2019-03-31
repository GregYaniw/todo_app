interface Todo {
	title: string;
};

interface User {
	name: string;
	appName: string; 
}

interface TodoApp<T> {
	user: T;
}

let createInputElement = (inputValue: string): HTMLInputElement => {
	let inputElement = document.createElement('input');
	inputElement.type = 'text';
	inputElement.value = inputValue;
	inputElement.className = 'edit-input';
	inputElement.setAttribute('style', 'display: none');
	return inputElement;
}

let updateTodo = (selectInputElement: HTMLInputElement, selectSpanElement: HTMLSpanElement) => {
	selectSpanElement.innerText = selectInputElement.value;
}

let getCompleteButton = (): HTMLButtonElement => {
	let completeButton = document.createElement('button');
	completeButton.innerText = 'Mark Complete';
	completeButton.className = 'complete-button';
	return completeButton;
}

class UpdateButton {
	button: string;
	constructor(button: string) {
		this.button = button;
	}
	getUpdateButton(): HTMLButtonElement {
		let updateButton = document.createElement('button');
		updateButton.innerText = this.button;
		updateButton.className = 'update-button';
		updateButton.setAttribute('style', 'display: none');
		return updateButton;
	}
}

class EditButton {
	button: string;
	constructor(button: string) {
		this.button = button;
	}
	getEditButton(): HTMLButtonElement {
		let editButton = document.createElement('button');
		editButton.innerText = this.button;
		editButton.className = 'edit-button';
		return editButton;
	}
}

class DeleteButton {
	button: string;
	constructor(button: string) {
		this.button = button;
	}
	getDeleteButton(): HTMLButtonElement {
		let deleteButton = document.createElement('button');
		deleteButton.innerText = this.button;
		deleteButton.className = 'delete-button';
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
	let spanElement = document.createElement('span');
	let spantext = document.createTextNode(inputData.title);
	spanElement.appendChild(spantext);
	listElement.appendChild(spanElement);

	let todoList = document.getElementById('todo-list');
	let updateButton = new UpdateButton('Update');
	let editButton = new EditButton('Edit');
	let deleteButton = new DeleteButton('X');
	let markCompleteButton = getCompleteButton();
	let inputElement: HTMLInputElement = createInputElement(inputData.title);

	if (todoList !== null) {
		todoList.appendChild(listElement);
		listElement.appendChild(inputElement);
		listElement.appendChild(updateButton.getUpdateButton());
		listElement.appendChild(editButton.getEditButton());
		listElement.appendChild(markCompleteButton);
		listElement.appendChild(deleteButton.getDeleteButton());

		const selectInputElement: HTMLInputElement = listElement.querySelector('input.edit-input');
		const selectUpdateButton: HTMLButtonElement = listElement.querySelector('button.update-button');
		const selectEditButton: HTMLButtonElement = listElement.querySelector('button.edit-button');
		const selectCompleteButton: HTMLButtonElement = listElement.querySelector('button.complete-button');
		const selectDeleteButton: HTMLButtonElement = listElement.querySelector('button.delete-button');
		const selectSpanElement: HTMLSpanElement = listElement.querySelector('span');

		selectCompleteButton.addEventListener('click', () => {
			if (selectCompleteButton.innerText !== 'Mark Incomplete') {
				selectCompleteButton.innerText = 'Mark Incomplete';
				selectSpanElement.setAttribute('style', 'text-decoration: line-through');
				return;
			}
			selectCompleteButton.innerText = 'Mark Complete';
			selectSpanElement.setAttribute('style', 'text-decoration: none');

		});

		selectUpdateButton.addEventListener('click', () => {
			updateTodo(selectInputElement, selectSpanElement);
			
			selectUpdateButton.setAttribute('style', 'display: none');
			inputElement.setAttribute('style', 'display: none');
			selectCompleteButton.setAttribute('style', 'display: inline-block');
			selectSpanElement.setAttribute('style', 'display: block');
			selectEditButton.setAttribute('style', 'display: inline-block');

		});

		selectEditButton.addEventListener('click', () => {
			selectCompleteButton.setAttribute('style', 'display: none');
			selectSpanElement.setAttribute('style', 'display: none');
			selectEditButton.setAttribute('style', 'display: none');
			selectInputElement.setAttribute('style', 'display: block');
			selectUpdateButton.setAttribute('style', 'display: inline-block');
		});
		
		selectDeleteButton.addEventListener('click', () => {
			listElement.parentNode.removeChild(<HTMLElement>listElement);
		});
	}
};

window.addEventListener('DOMContentLoaded', () => {

	let appTitle: TodoApp<User> = {
		user: {
			name: 'Greg',
			appName: 'Todo List',
		}
	}

	document.getElementsByTagName('h1')[0].innerText = `Welcome to ${ appTitle.user.name }'s simple TypeScript ${ appTitle.user.appName } App`;

	let form: HTMLElement|null = document.getElementById('todo-form');

	if (form !== null) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			let inputData = getInputData(<HTMLElement>form);
			if (inputData.title === '') {
				return;
			}
			clearInputAfterSubmit(<HTMLElement>form);
			postTodo(inputData);
		});
	}
});