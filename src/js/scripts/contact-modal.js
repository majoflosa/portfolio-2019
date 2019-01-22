window.addEventListener('load', () => {
    const landingModal = new ModalBox({
        wrapperSelector: '.contact-modal',
        togglerSelectors: ['.modal-close', '.splash-cta', '.contact-link'],
        hiddenClass: 'hidden',
        visibleClass: 'visible'
    });
});
