window.onload = function () {
	const paper = document.querySelector(".paper");
	
	const flipButton = document.querySelector("button")
	flipButton.addEventListener("click", () => {
		paper.classList.toggle("flip")
	})
	
	const leftSide = paper.querySelector(".page.left");
	leftSide.addEventListener("click", () => {
		leftSide.classList.toggle("open")
	});
	
	const rightSide = paper.querySelector(".page.right");
	rightSide.addEventListener("click", () => {
		rightSide.classList.toggle("open")
	});
	
	const centerSide = paper.querySelector(".page.center");
	centerSide.addEventListener("click", () => {
		centerSide.classList.toggle("open")
	});
}