export default class LoadingScreen {
    constructor( selector ) {
        this.$body = document.querySelector('body');
        this.$loadingScreen = this.$body.querySelector( selector );
        if ( !this.$loadingScreen ) {
            console.warn( `The provided query selector ${selector} did not match any elements on the document.` );
            return false;
        }

        this.init = this.init.bind( this );
        this.fadeLoadingScreen = this.fadeLoadingScreen.bind( this );

        this.init();
    }

    init() {
        this.$body.style.height = window.height + 'px';
        this.$body.style.overflow = 'hidden';
        this.fadeLoadingScreen();
    }

    fadeLoadingScreen() {
        this.$loadingScreen.classList.add( 'fulfilled' );
        
        this.$body.style.height = 'auto';
        this.$body.style.overflow = 'initial';

        setTimeout( () => this.$loadingScreen.style.display = 'none', 1500);
    }
}


// window.addEventListener('unload', () => {
//     const $body = document.querySelector('body');
//     TweenMax.to( $body, 0.25, {opacity: 0} );
// });
