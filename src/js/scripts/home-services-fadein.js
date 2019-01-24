import FadeInOnscroll from '../lib/fade-in-onscroll-multiple';

export default function HomeServicesFadeIn() {
    
    window.addEventListener('load', () => {
        const servicesFadeIn = new FadeInOnscroll({
            contentSelector: '.services-section-list',
            fadeInSectionsSelector: '.services-section-item',
            animationDuration: 1,
            positionShift: 50,
            staggerDelay: 0.3
        });
    });
    
}

