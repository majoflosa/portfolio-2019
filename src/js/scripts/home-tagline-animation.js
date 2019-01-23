window.addEventListener('load', () => {
    // const taglineAnimation = new FadeInOnscroll({
    //     contentSelector: '.landing-services-list',
    //     fadeInSectionsSelector: '.landing-services-item',
    //     animationDuration: 1,
    //     positionShift: 50,
    //     staggerDelay: 0.3
    // });
    const taglinePieces = document.querySelectorAll('.tagline-piece');
    setTimeout( () => {
        TweenMax.staggerFromTo( 
            taglinePieces, 
            0.75, 
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0 },
            0.2
        );
    }, 700);
});