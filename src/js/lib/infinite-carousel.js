// import TweenMax from 'gsap/TweenMax';

export default class InfiniteCarousel {
    constructor( options ) {
        this.$wrap = document.querySelector( options.wrapSelector );
        if ( !this.$wrap ) {
            if (process.env.NODE_ENV === 'development')
                console.warn( `The provided query selector ${options.wrapSelector} did not match any elements on the document.` );
                
            return false;
        }
        this.$innerWrap = this.$wrap.querySelector( options.innerWrapSelector );
        this.$itemsCollection = this.$wrap.querySelectorAll( options.itemsSelector );
        this.$items = [...this.$itemsCollection];


        this.timeInterval = options.timeInterval || 5000;
        this.transitionDuration = options.transitionDuration || 0.6;
        this.playInterval = null;
        this.currentIndex = 0;

        this.playCarousel = this.playCarousel.bind( this );
        this.nextItem = this.nextItem.bind( this );

        this.$items.forEach( item => this.$innerWrap.appendChild(item.cloneNode(true)) );
        this.playCarousel();
    }

    playCarousel() {
        this.playInterval = setInterval( this.nextItem, this.timeInterval );
    }

    nextItem() {
        if ( this.currentIndex > this.$items.length ) this.currentIndex = 0;
        if ( this.currentIndex === 0 ) {
            TweenMax.to( this.$innerWrap, 0, {x: 0} );
            TweenMax.to( this.$innerWrap, this.transitionDuration, {x: `-=${(this.$items[0].offsetWidth)}`} );
        } else {
            TweenMax.to( this.$innerWrap, this.transitionDuration, {x: `-=${(this.$items[0].offsetWidth)}`} );
        }

        this.currentIndex++;
    }

    // previousItem() {

    // }
}
