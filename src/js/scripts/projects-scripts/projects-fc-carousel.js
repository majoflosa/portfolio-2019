import InfiniteCarousel from '../../lib/infinite-carousel';

export default function projectsFoliocliqueCarousel() {

    window.addEventListener('load', () => {
        const fcCarousel = new InfiniteCarousel({
            wrapSelector: '.main-section-item-gallery',
            innerWrapSelector: '.inner-gallery',
            itemsSelector: '.gallery-item',
            timeInterval: 5000 // milliseconds
        })
    });

}
