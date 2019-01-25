import FadeInOnscroll from '../../lib/fade-in-onscroll-multiple';

export default function clientProjectsFadeIn() {

    window.addEventListener('load', () => {
        const projectsFadeIn = new FadeInOnscroll({
            contentSelector: '.client .main-section-list',
            fadeInSectionsSelector: '.client .main-section-item',
            animationDuration: 0.5,
            positionShift: 0,
            staggerDelay: 0.15,
            extraFromOptions: { scale: 0.85 },
            extraToOptions: { scale: 1 }
        });
    });
    
}
