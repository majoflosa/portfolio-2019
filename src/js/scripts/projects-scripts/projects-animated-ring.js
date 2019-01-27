import ProgressRing from '../../lib/progress-ring';

export default function projectsAnimatedRing() {
    window.addEventListener('load', () => {
        const progressRing1 = new ProgressRing({
            ringSelector: '.progress-ring-path-1',
            numberSelector: '.number-1',
            percent: 72,
            animationDuration: 1800
        });
    });
}
