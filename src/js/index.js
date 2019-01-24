// import { TweenMax, ScrollToPlugin } from 'gsap/all';

// import loadingScreen from './scripts/loading-screen';
// import BasicPlx from './scripts/basic-plx';
// import CarouselGallery from './scripts/carousel-gallery';
// import FadeInMultiple from './scripts/fade-in-onscroll-multiple';
// import InfiniteCarousel from './scripts/infinite-carousel';
// import LayeredPlx from './scripts/layered-plx';
// import ModalBox from './scripts/modal-box';
// import ScrollDownButton from './scripts/scrolldown-button';
// import SlideshowFade from './scripts/slideshow-fade';
// import StickyNav from './scripts/sticky-nav';

import loadingScreen from './scripts/loading-screen-instance';
import nav from './scripts/nav';
import contactModal from './scripts/contact-modal';
import homeTagline from './scripts/home-tagline-animation';
import splashScroll from './scripts/splash-scroll';
import homeSplashPlx from './scripts/home-splash-plx';
import homeServicesFadeIn from './scripts/home-services-fadein';
import homeSkillsFadeIn from './scripts/home-skills-fadeIn';
import homeProjectsFadeIn from './scripts/home-projects-fadein';

import '../sass/style.sass';

loadingScreen();
nav();
contactModal();

homeTagline();
homeSplashPlx();
splashScroll();
homeServicesFadeIn();
homeSkillsFadeIn();
homeProjectsFadeIn();

// window.addEventListener('load', () => {
//     console.log( 'window loaded' );

//     const landingModal = new ModalBox({
//         wrapperSelector: '.contact-modal',
//         togglerSelectors: ['.modal-close', '.splash-cta', '.contact-link'],
//         hiddenClass: 'hidden',
//         visibleClass: 'visible'
//     });

//     const projectsFadeIn = new FadeInMultiple({
//         contentSelector: '.projects-section-list',
//         fadeInSectionsSelector: '.projects-section-item',
//         animationDuration: 1,
//         positionShift: 50,
//         staggerDelay: 0.3
//     });

//     const servicesFadeIn = new FadeInMultiple({
//         contentSelector: '.services-section-list',
//         fadeInSectionsSelector: '.services-section-item',
//         animationDuration: 1,
//         positionShift: 50,
//         staggerDelay: 0.3
//     });

//     const skills = new FadeInMultiple({
//         contentSelector: '.skills-section-list',
//         fadeInSectionsSelector: '.skills-section-item',
//         animationDuration: 0.3,
//         positionShift: 30,
//         staggerDelay: 0.15,
//         extraFromOptions: { scale: 0.5 },
//         extraToOptions: { scale: 1 }
//     });

//     const splashPlx = new BasicPlx({
//         bannerSelector: '.splash',
//         backgroundSelector: '.plx-background', 
//         backgroundImageSelector: '.plx-background img'
//     });

//     const taglinePieces = document.querySelectorAll('.tagline-piece');
//     if ( !taglinePieces.length ) {
//         console.warn('No tagline pieces found');
//         return false;
//     }
    
//     [...taglinePieces].forEach( piece => piece.style.opacity = 0);
//     setTimeout( () => {
//         TweenMax.staggerFromTo( 
//             taglinePieces, 
//             0.75, 
//             { opacity: 0, y: 10 },
//             { opacity: 1, y: 0 },
//             0.2
//         );
//     }, 300);

//     const scrollDownButton = new ScrollDownButton({
//         buttonSelector: '.scroll-down-button',
//         currentSectionSelector: '.splash',
//         animationDuration: 1.25 // seconds
//     });

//     const stickyNav = new StickyNav({
//         navSelector: '.main-nav',
//         mainWrapSelector: '.page-wrap',
//         stickyClass: 'sticky',
//         menuButtonSelector: '.mobile-menu-button',
//         menuSelector: '.main-nav-links',
//         openMenuClass: 'open',
//         closeMenuClass: 'close'
//     });

//     const loadingScreen = new LoadingScreen( '#loading-screen' );
// });
