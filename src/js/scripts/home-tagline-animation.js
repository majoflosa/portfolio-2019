import TweenMax from 'gsap/TweenMax';

export default function homeTagline() {

    window.addEventListener('load', () => {
        const taglinePieces = document.querySelectorAll('.tagline-piece');
        if ( !taglinePieces.length ) {
            console.warn('No tagline pieces found');
            return false;
        }
        
        [...taglinePieces].forEach( piece => piece.style.opacity = 0);
        // setTimeout( () => {
            TweenMax.staggerFromTo( 
                taglinePieces, 
                0.75, 
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0 },
                0.2
            );
        // }, 100);
    });
    
}
