export default class StickyNav {
    constructor( options ) {
        this.$nav = document.querySelector( options.navSelector );
        this.$mainWrap = document.querySelector( options.mainWrapSelector );
        if ( !this.$mainWrap ) {
            console.warn( `The provided query selector ${options.mainWrapSelector} did not match any elements on the document.` );
            return false;
        }
        this.$splash = this.$mainWrap.querySelector( '.splash' );

        this.stickPoint = 0 //this.$splash.offsetHeight - this.$nav.offsetHeight;
        this.stickyClass = options.stickyClass;

        this.isSticky = false;

        this.$menuButton = document.querySelector( options.menuButtonSelector );
        this.$menu = document.querySelector( options.menuSelector );
        this.openMenuClass = options.openMenuClass;
        this.closeMenuClass = options.closeMenuClass;

        // bind context of all methods to current instance
        this.stick = this.stick.bind( this );
        this.toggleMenu = this.toggleMenu.bind( this );
        this.disableStick = this.disableStick.bind( this );

        // run all initial functionality
        window.addEventListener( 'scroll', this.stick );
        window.addEventListener( 'resize', this.disableStick );
        this.$menuButton.addEventListener( 'click', this.toggleMenu );
    }
    
    stick() {
        // if ( window.innerWidth < 960 ) return false;

        if ( window.scrollY > this.stickPoint && this.isSticky ) {
            // do nothing if nav is already in sticky state, and user is scrolling past sticking point
            return;
        } else if ( window.scrollY > this.stickPoint && !this.isSticky ) {
            // user is scrolling past sticking point while nav is in initial state
            this.$nav.classList.add( this.stickyClass );

            this.isSticky = true;
        } else {
            // set nav back to initial state if scrolling back to sticking point
            this.$nav.classList.remove( this.stickyClass );

            this.isSticky = false;
        }
    }

    disableStick() {
        if ( window.innerWidth < 960 ) {
            this.$nav.classList.remove( this.stickyClass );
    
            this.isSticky = false;
        } 
    }

    toggleMenu() {
        if ( this.$menu.classList.contains(this.openMenuClass) ) {
            this.$menu.classList.remove( this.openMenuClass );
            this.$menu.classList.add( this.closeMenuClass );
        }
        else {
            this.$menu.classList.remove( this.closeMenuClass );
            this.$menu.classList.add( this.openMenuClass );
        } 
    }
}

// instantiate the component
// window.addEventListener('load', function() {
//     const stickyNav = new StickyNav({
//         navSelector: '.main-nav',
//         mainWrapSelector: '.page-wrap',
//         stickyClass: 'sticky',
//         menuButtonSelector: '.mobile-menu-button',
//         menuSelector: '.main-nav-links',
//         openMenuClass: 'open',
//         closeMenuClass: 'close'
//     });
// });