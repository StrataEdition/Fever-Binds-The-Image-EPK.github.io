const lightbox = document.getElementById('image-lightbox');
const lightboxImage = document.getElementById('image-lightbox-image');
const closeButton = document.querySelector('.image-lightbox-close');
const pageImages = document.querySelectorAll('.epk-image');

function closeLightbox() {
	lightbox.hidden = true;
	document.body.classList.remove('lightbox-open');
	lightboxImage.removeAttribute('src');
}

pageImages.forEach((image) => {
	image.tabIndex = 0;
	image.setAttribute('role', 'button');
	image.setAttribute('aria-label', `Enlarge ${image.alt}`);

	function openLightbox() {
		lightboxImage.src = image.src;
		lightboxImage.alt = image.alt;
		lightbox.hidden = false;
		document.body.classList.add('lightbox-open');
		closeButton.focus();
	}

	image.addEventListener('click', openLightbox);
	image.addEventListener('keydown', (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			openLightbox();
		}
	});
});

closeButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
	if (event.target === lightbox) {
		closeLightbox();
	}
});
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && !lightbox.hidden) {
		closeLightbox();
	}
});