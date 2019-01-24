import ModalBox from '../lib/modal-box';

export default function contactModal() {

    window.addEventListener('load', () => {
        const contactModal = new ModalBox({
            wrapperSelector: '.contact-modal',
            togglerSelectors: ['.modal-close', '.splash-cta', '.contact-link'],
            hiddenClass: 'hidden',
            visibleClass: 'showing'
        });
    
        // export default landingModal;
    });

}