interface Todo {
	title: string;
};

let getInputData = (): Todo => {
	let output = {title: 'dishes'};

	return output;
};

window.addEventListener('DOMContentLoaded', () => {
	console.log('content loaded');

	let form = document.getElementById('todo-form');
	console.log('form', form);

	if (form !== null) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			let inputData = getInputData();
			console.log('form submitted', inputData);
		});
	}
});