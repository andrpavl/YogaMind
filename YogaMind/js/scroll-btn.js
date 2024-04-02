const scrollBtn = document.querySelector(".scroll-btn");
const target = document.querySelector(".js-guard");
let options = {
	root: null,
	rootMargin: "1px",
	threshold: 1.0,
};

let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		scrollBtn.style.display = entries[0].isIntersecting ? "none" : "block";
	});
}, options);

observer.observe(target);

scrollBtn.addEventListener("click", () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
});
