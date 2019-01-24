window.addEventListener('load', () => {
    const projectsFadeIn = new FadeInOnscroll({
        contentSelector: '.projects-section-list',
        fadeInSectionsSelector: '.projects-section-item',
        animationDuration: 1,
        positionShift: 50,
        staggerDelay: 0.3
    });
});
