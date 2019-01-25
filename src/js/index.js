import loadingScreen from './scripts/general-scripts/loading-screen-instance';
import nav from './scripts/general-scripts/nav';
import contactModal from './scripts/general-scripts/contact-modal';
import splashScroll from './scripts/general-scripts/splash-scroll';

import homeTagline from './scripts/home-scripts/home-tagline-animation';
import homeSplashPlx from './scripts/home-scripts/home-splash-plx';
import homeServicesFadeIn from './scripts/home-scripts/home-services-fadein';
import homeSkillsFadeIn from './scripts/home-scripts/home-skills-fadeIn';
import homeProjectsFadeIn from './scripts/home-scripts/home-projects-fadein';

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
