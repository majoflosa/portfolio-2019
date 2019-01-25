import StickyNav from '../../lib/sticky-nav';

export default function nav() {

    const stickyNav = new StickyNav({
        navSelector: '.main-nav',
        mainWrapSelector: '.page-wrap',
        stickyClass: 'sticky',
        menuButtonSelector: '.mobile-menu-button',
        menuSelector: '.main-nav-links',
        openMenuClass: 'open',
        closeMenuClass: 'close'
    });

}
