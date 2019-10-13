class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.lowest = min;
        this.highest = max;
    }

    guess() {
        return Math.ceil((this.lowest+this.highest)/2);
    }

    lower() {
        this.highest = this.guess();
    }

    greater() {
        this.lowest =this.guess();
    }
}

module.exports = GuessingGame;


