const btn = document.getElementById('submit');
const errorElements = document.querySelectorAll('.error-element');

function validateEmail(input) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
		return true;
	}
	return false;
}

function onSubmit(e) {
	e.preventDefault();
	const input = document.getElementById('email');

	let isValid = validateEmail(input.value);

	if (!isValid) {
		errorElements.forEach((element) => {
			element.classList.add('show-error');
		});
	} else {
		errorElements.forEach((element) => {
			element.classList.remove('show-error');
		});
		console.log('Email valid');
	}
}

btn.addEventListener('click', onSubmit);
