export default class ModalBox {
    constructor( options ) {
        this.$modal = document.querySelector( options.wrapperSelector );
        if ( !this.$modal ) {
            if (process.env.NODE_ENV === 'development')
                console.warn( `The provided query selector ${options.wrapperSelector} did not match any element on the document.` );

            return false;
        }
        this.$togglers = [];
        
        this.hiddenClass = options.hiddenClass;
        this.visibleClass = options.visibleClass;
        this.displaying = false;
        
        this.setTogglers = this.setTogglers.bind( this );
        this.toggleModal = this.toggleModal.bind( this );
        
        this.setTogglers( options.togglerSelectors );
        this.$togglers.forEach( $toggler => $toggler.addEventListener('click', this.toggleModal) );
    }

    setTogglers( selectors ) {
        for ( let i = 0; i < selectors.length; i++ ) {
            let $toggler = document.querySelectorAll( selectors[i] );
            if ( $toggler ) this.$togglers.push( ...$toggler );
        } 
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
