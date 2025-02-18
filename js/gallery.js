//JS - Gallery Page - Created by Juan Jacobo Florez Monroy/8857381 */
"use strict";

/**
 * Function that is executed when the mouse enters over some images of the page.
 * @param {*} evt Element affected.
 */
const mouseEntered = (evt) => {
	const divImgHover = evt.currentTarget;
	// Toggle the class that blur the image affected.
	$(divImgHover).find(".img_collage").toggleClass("img_hover");
	// Display the text on the image.
	$(divImgHover).find(".text_centered").fadeIn(0);
	// Change the opacity to 1 of the text on the image.
	$(divImgHover).find(".text_centered").animate({ opacity: "1" }, 500);
};

/**
 * Function that is executed when the mouse leaves some images of the page.
 * @param {*} evt
 */
const mouseLeave = (evt) => {
	const divImgHover = evt.currentTarget;
	// Toggle the class that blur the image affected.
	$(divImgHover).find(".img_collage").toggleClass("img_hover");
	// Hide the text on the image.
	$(divImgHover).find(".text_centered").fadeOut(500);
	// Change the opacity to 0 of the text on the image.
	$(divImgHover).find(".text_centered").animate({ opacity: "0" }, 500);
};

$(() => {
	// Initialize the slider
	$(".bxslider").bxSlider({
		mode: "fade", // Type of transition between slides.
		captions: true, // Include image captions. Captions are derived from the image's title attribute.
		responsive: true, // Enable or disable auto resize of the slider. Useful if you need to use fixed width sliders.
		auto: true, // Slides will automatically transition.
		randomStart: true, // Start slider on a random slide.
	});

	$(".div_img_collage").hover(mouseEntered, mouseLeave);
});
