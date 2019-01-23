class BasicPlxBanner {
    constructor( selectors ) {
        this.$banner = document.querySelector( selectors.bannerSelector );
        this.$bannerBg = this.$banner.querySelector( selectors.backgroundSelector );

        this.bannerHt = this.$banner.offsetHeight;
        this.bannerBgHt = this.$bannerBg.querySelector( selectors.backgroundImageSelector ).offsetHeight;

        this.initialBannerTop = 0;
        
        this.init = this.init.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.parallax = this.parallax.bind( this );

        this.init();
    }

    /**
     * Set initial `top` position of image being used as background,
     * Bind event listeners to pertinent DOM elements
     */
    init() {
        this.$bannerBg.style.top = this.initialBannerTop + 'px';
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener( 'scroll', this.parallax );
    }

    /**
     * Calculate and set new `top` value for banner image based on window scroll position
     */
    parallax() {
        this.$bannerBg.style.top = this.initialBannerTop - (window.scrollY * -0.5) + 'px';
    }
}
