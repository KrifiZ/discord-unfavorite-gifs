(function clickRemoveFromFavorites() {
	const buttonSelector = ".favButton_bad108";
	const delay = 200; // Delay in milliseconds

	const buttons = document.querySelectorAll(buttonSelector);
	let clicked = false;

	buttons.forEach((button) => {
		const ariaLabel = button.getAttribute("aria-label");
		if (ariaLabel && /Remove/i.test(ariaLabel)) {
			// Case-insensitive check for "Remove"
			button.click();
			console.log('Clicked a matching "Remove from Favourites" button!');
			clicked = true;
			return;
		}
	});

	if (!clicked) {
		console.log('No button with "Remove" found.');
	}

	setTimeout(clickRemoveFromFavorites, delay);
})();
