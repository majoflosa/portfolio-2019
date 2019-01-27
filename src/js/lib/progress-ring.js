export default class ProgressRing {
    constructor( options ) {
        this.$ring = document.querySelector( options.ringSelector );
        this.$number = document.querySelector( options.numberSelector );
        if ( !this.$ring || !this.$number ) {
            if (process.env.NODE_ENV === 'development') console.warn('No elements found for animated ring selectors.');
            return false;
        }

        // this.percent = Math.floor( Math.random() * 100 ); // options.percent;
        this.animationDuration = options.animationDuration;
        this.countedPercentage = 0;
        this.circumference;

        this.animate = this.animate.bind( this );
        this.countPercentage = this.countPercentage.bind( this );
        this.calculateCircle = this.calculateCircle.bind( this );

        setInterval( () => this.animate(), 5000 );
    }

    animate() {
        let interval = setInterval( () => this.countPercentage(), 10 );
        this.countedPercentage = 0;
        this.percent = Math.floor( Math.random() * 100 );
        this.calculateCircle();

        setTimeout( () => {
            clearInterval( interval );
            this.$number.innerText = this.percent + '%';
        }, this.animationDuration);

        TweenMax.fromTo(
            this.$ring,
            this.animationDuration/1000,
            { strokeDasharray: 0, strokeDashoffset: 0 },
            { 
                strokeDasharray: `${this.circumference} ${this.circumference}`, 
                strokeDashoffset: this.circumference - this.percent / 100 * this.circumference
            }
        );
    }

    calculateCircle() {
        const radius = this.$ring.r.baseVal.value;
        this.circumference = radius * 2 * Math.PI;

        this.$ring.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    }

    countPercentage() {
        this.countedPercentage += this.percent/(this.animationDuration/10);
        this.$number.innerText = this.countedPercentage.toFixed() + '%';
    }
}
