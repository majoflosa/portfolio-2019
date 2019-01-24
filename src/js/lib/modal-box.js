export default class ModalBox {
    constructor( options ) {
        this.$modal = document.querySelector( options.wrapperSelector );
        if ( !this.$modal ) {
            console.warn( `The provided query selector ${options.wrapperSelector} did not match any element on the document.` );

            return false;
        }
        this.$togglers = [];
        
        this.hiddenClass = options.hiddenClass;
        this.visibleClass = options.visibleClass;
        this.displaying = false;
        
        this.setTogglers = this.setTogglers.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.toggleModal = this.toggleModal.bind( this );
        
        this.setTogglers( options.togglerSelectors );
        this.bindEvents();
    }

    setTogglers( selectors ) {
        for ( let i = 0; i < selectors.length; i++ ) {
            let $toggler = document.querySelectorAll( selectors[i] );
            if ( $toggler ) this.$togglers.push( ...$toggler );
        } 
    }

    bindEvents() {
        this.$togglers.forEach( $toggler => $toggler.addEventListener('click', this.toggleModal) );
    }

    toggleModal( event ) {
        event.preventDefault();
        
        if ( this.displaying ) {
            this.$modal.classList.remove( this.visibleClass );
            this.$modal.classList.add( this.hiddenClass );
        } else {
            this.$modal.classList.remove( this.hiddenClass );
            this.$modal.classList.add( this.visibleClass );
        }

        this.displaying = !this.displaying;
    }
}
