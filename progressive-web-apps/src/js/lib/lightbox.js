const LIGHTBOX_CLASS = 'lightbox';
const LIGHTBOX_WRAPPER_CLASS = 'js--lightbox';
const LIGHTBOX_IMG_LINK_CLASS = 'gallery__image';

const contentArea = document.querySelector(`.${LIGHTBOX_WRAPPER_CLASS}`);
const lightbox = document.querySelector(`.${LIGHTBOX_CLASS}`);

export default () => {
  contentArea.addEventListener('click', (event) => {
    if (event.target.classList.contains(LIGHTBOX_IMG_LINK_CLASS)) {
      const link = event.target.parentNode;

      if (link && link.href) {
        event.preventDefault();
        lightbox.querySelector(`.${LIGHTBOX_CLASS}__image`).src = link.href;

        // The timeout prevents a flicker of the images changing while fading in
        setTimeout(() => { lightbox.classList.remove(`${LIGHTBOX_CLASS}--disabled`); }, 50);
      }
    }
  });

  lightbox.addEventListener('click', (event) => {
    if (!event.target.classList.contains(`${LIGHTBOX_CLASS}__image`)) {
      event.preventDefault();
      lightbox.classList.add(`${LIGHTBOX_CLASS}--disabled`);
    }
  });
};
