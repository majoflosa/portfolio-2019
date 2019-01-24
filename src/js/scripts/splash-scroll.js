import ScrollDownButton from '../lib/scrolldown-button';

export default function splashScroll() {

    window.addEventListener('load', () => {
        const scrollDownButton = new ScrollDownButton({
            buttonSelector: '.scroll-down-button',
            currentSectionSelector: '.splash',
            animationDuration: 1.25 // seconds
        });
    });
    
}
