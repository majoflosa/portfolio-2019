// import { TweenLite, ScrollToPlugin } from 'gsap/all';

// const plugins = [ScrollToPlugin];

export default class ScrollDownButton {
    constructor( options ) {
        this.$button = document.querySelector( options.buttonSelector );
        this.$currentSection = document.querySelector( options.currentSectionSelector );
        if ( !this.$button ) {
            console.warn( `The provided query selector ${options.buttonSelector} did not match any elements on the document.` );
            return false;
        }

        this.animationDuration = options.animationDuration || 2;

        this.scrollDown = this.scrollDown.bind( this );

        this.$button.addEventListener('click', this.scrollDown );
    }

    scrollDown() {
        TweenLite.to( window, this.animationDuration, { scrollTo: this.$currentSection.offsetHeight - 60});
    }
}

// window.addEventListener('load', () => {
//     const scrollDownButton = new ScrollDownButton({
//         buttonSelector: '.scroll-down-button',
//         currentSectionSelector: '.splash',
//         animationDuration: 1.25 // seconds
//     });
// });
