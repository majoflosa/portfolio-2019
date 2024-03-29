// import TweenMax from 'gsap/TweenMax';

export default class CarouselGallery {
    constructor( options ) {
        this.$outerWrapper = document.querySelector( options.outerWrapperSelector );
        if ( !this.$outerWrapper ) {
            if (process.env.NODE_ENV === 'development')
                console.warn( `The provided query selector ${options.outerWrapperSelector} did not match any elements on the document.` );
                
            return false;
        }

        this.$innerWrapper = this.$outerWrapper.querySelector( options.innerWrapperSelector );
        this.$items = [...this.$outerWrapper.querySelectorAll( options.itemSelector)];
        this.$bullets = [...this.$outerWrapper.querySelectorAll( options.bulletSelector)];

        this.selectedBulletClass = options.selectedBulletClass;
        this.bulletClass = options.bulletSelector;
        this.animationDuration = options.animationDuration === undefined ? 0.5 : options.animationDuration;

        this.bindEvents = this.bindEvents.bind( this );
        this.shiftCarousel = this.shiftCarousel.bind( this );
        this.calculateSizes = this.calculateSizes.bind( this );

        this.calculateSizes();
        this.bindEvents();
    }

    bindEvents() {
        this.$bullets.forEach( $bullet => $bullet.addEventListener( 'click', this.shiftCarousel ) );
        window.addEventListener( 'resize', this.calculateSizes );
    }

    shiftCarousel( event ) {
        const bulletIndex = this.$bullets.indexOf( event.target );

        this.$bullets.forEach( $bullet => $bullet.classList.remove( this.selectedBulletClass) );
        event.target.classList.add( this.selectedBulletClass );

        TweenMax.to( 
            this.$innerWrapper, 
            this.animationDuration, 
            {x: `-${(this.$items[0].offsetWidth + (this.$items[0].offsetLeft*2)) * bulletIndex}`}
        );
    }

    addBullets( addedOnResize = false ) {
        for ( let i = 0; i < this.bulletsNeeded; i++ ) {
            if ( this.$bullets.length <= this.bulletsNeeded ) {
                const $bullet = document.createElement( 'span' );
                $bullet.classList.add( this.bulletClass.substr(1, this.bulletClass.length) );
                if ( addedOnResize ) $bullet.addEventListener('click', this.shiftCarousel);
                
                this.$bullets[0].parentElement.appendChild( $bullet );
                this.$bullets.push( $bullet );
            } else if ( this.$bullets.length > this.bulletsNeeded + 1 ) {
                const $lastBullet = this.$bullets.pop();
                this.$bullets[0].parentElement.removeChild( $lastBullet );

                if ( $lastBullet.classList.contains(this.selectedBulletClass) ) {
                    this.$bullets[this.$bullets.length - 1].classList.add( this.selectedBulletClass );
                    this.shiftCarousel( {target: this.$bullets[this.$bullets.length - 1]} );
                }
            }
        }
    } 

    calculateSizes() {
        this.itemWidthMargin = this.$items[0].offsetWidth + (this.$items[0].offsetLeft*2);
        this.shiftSpace = (this.$items.length * this.itemWidthMargin) - this.$outerWrapper.offsetWidth;
        this.bulletsNeeded = Math.round(this.shiftSpace / this.itemWidthMargin);

        this.addBullets( true ); 
    }
}

// window.addEventListener('load', () => {
//     const articlesCarousel = new CarouselGallery({
//         outerWrapperSelector: '.landing-articles-list-outer',
//         innerWrapperSelector: '.landing-articles-list',
//         itemSelector: '.landing-articles-item',
//         bulletSelector: '.carousel-bullet',
//         selectedBulletClass: 'selected-bullet',
//         animationDuration: 0.5 // seconds; defaults to 0.5
//     });
// });
