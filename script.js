const grid = document.getElementById('etch');

for (i = 0; i < 256; i++) {
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

let slider = document.getElementById('slider');
let slider_output = document.getElementById("output");
slider_output.innerText = slider.value + ' x ' + slider.value;

slider.oninput = function () {
	slider_output.innerText = this.value + ' x ' + this.value;
	grid.innerHTML = ' ';
	let area = parseInt(this.value * this.value);
	for (i = 0; i < area; i++) {
		let gridBox = document.createElement('div');
		gridBox.classList.add('grid-box');
		document.getElementById('etch').appendChild(gridBox);
		grid.style.gridTemplateRows = `repeat(${this.value}, 1fr)`;
		grid.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`;
	}
	gridBoxes = document.querySelectorAll('.grid-box');

	gridBoxes.forEach((gridBox) => {
	gridBox.addEventListener('mouseenter', () => {
		gridBox.classList.add('hovered');
	});
});
}

let clearBoard = document.getElementById('clear');

clearBoard.addEventListener('click', () => {
	gridBoxes.forEach((gridBox) => {
		gridBox.classList.remove('hovered');
	});
});