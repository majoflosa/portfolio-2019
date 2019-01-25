import BasicPlxBanner from '../../lib/basic-plx';

export default function homeSplashPlx() {

    window.addEventListener('load', () => {
        const plxBanner = new BasicPlxBanner({
            bannerSelector: '.splash',
            backgroundSelector: '.plx-background', 
            backgroundImageSelector: '.plx-background img'
        });
    });
    
}
