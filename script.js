const grid = document.getElementById('etch');

for (i = 0; i < 16; i++) {
	let gridBox = document.createElement('div');
	gridBox.classList.add('grid-box');
	document.getElementById('etch').appendChild(gridBox);
}

let gridBoxes = document.querySelectorAll('.grid-box');

gridBoxes.forEach((gridBox) => {
	gridBox.addEventListener('mouseenter', () => {
		gridBox.classList.add('hovered');
	});
});

let slider = document.getElementById("slider");
let slider_output = document.getElementById("output");
slider_output.innerText = slider.value + ' x ' + slider.value;

slider.oninput = function () {
	slider_output.innerText = this.value + ' x ' + this.value;
	grid.innerHTML = ' ';
	for (i = 0; i < parseInt(this.value); i++) {
		let gridBox = document.createElement('div');
		gridBox.classList.add('grid-box');
		document.getElementById('etch').appendChild(gridBox);
	}
	let gridBoxes = document.querySelectorAll('.grid-box');

	gridBoxes.forEach((gridBox) => {
	gridBox.addEventListener('mouseenter', () => {
		gridBox.classList.add('hovered');
	});
});
}