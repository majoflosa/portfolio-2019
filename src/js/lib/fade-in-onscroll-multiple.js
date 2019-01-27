// import TweenMax from 'gsap/TweenMax';

export default class FadeInOnscroll {
    constructor( options ) {
        this.$element = document.querySelector( options.contentSelector );
        if ( !this.$element ) {
            if (process.env.NODE_ENV === 'development')
                console.warn( `The provided query selector ${options.contentSelector} did not match any elements on the document.` );

            return false;
        }
        
        this.fadeInSections = [...this.$element.querySelectorAll( options.fadeInSectionsSelector )];

        this.duration = options.animationDuration === undefined ? 1 : options.animationDuration;
        this.positionShift = options.positionShift === undefined ? 50 : options.positionShift;
        this.stagger = options.staggerDelay === undefined ? 0.3 : options.staggerDelay;

        this.extraFromOptions = options.extraFromOptions || {};
        this.extraToOptions = options.extraToOptions || {};

        this.elementHt = this.$element.offsetHeight;
        this.contentDisplayed = false;

        this.bindEvents = this.bindEvents.bind( this );
        this.fadeIn = this.fadeIn.bind( this );

        this.fadeInSections.forEach( section => section.style.opacity = +(window.outerWidth < 720) );
        this.fadeIn();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', this.fadeIn );
    }

    fadeIn() {
        if ( this.contentDisplayed || window.outerWidth < 720 ) return false;

        if ( this.$element.offsetTop - window.innerHeight + (this.elementHt * 0.25) <= window.scrollY ) {
            this.contentDisplayed = true;
            const fromOptions = { ...this.extraFromOptions, y: this.positionShift, opacity: 0 };
            const toOptions = { ...this.extraToOptions, y: 0, opacity: 1, ease: Power1.easeOut };

            TweenMax.staggerFromTo(
                this.fadeInSections,
                this.duration,
                fromOptions,
                toOptions,
                this.stagger
            );
        }
    }

}
