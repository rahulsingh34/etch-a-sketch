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