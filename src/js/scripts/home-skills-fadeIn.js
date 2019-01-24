import FadeInOnscroll from '../lib/fade-in-onscroll-multiple';

export default function homeSkillsFadeIn() {

    window.addEventListener('load', () => {
        const skills = new FadeInOnscroll({
            contentSelector: '.skills-section-list',
            fadeInSectionsSelector: '.skills-section-item',
            animationDuration: 0.3,
            positionShift: 30,
            staggerDelay: 0.15,
            extraFromOptions: { scale: 0.5 },
            extraToOptions: { scale: 1 }
        });
    });

}
