document.addEventListener("DOMContentLoaded", function () {
	var swiper = new Swiper(".swiper-container", {
		autoplay: {
			delay: 3000,
		},
		effect: "cube",
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
