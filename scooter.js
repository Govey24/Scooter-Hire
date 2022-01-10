const chargePoint = require('./chargePoint')
const hireCompany = require('./hireCompany')

class Scooter {

    constructor(model, speedLimit, chargePercentage) {
    this.model = model;
    this.speedLimit = speedLimit;
    this.chargePercentage = chargePercentage;
    }
    isCharged() {
        if (Scooter = 100) {
            return "Yes";
        } else {
            return "No"
        }
    }

    isHired() {

    }

    isWithtin32() {

    }

    isOverLimit() {

    }
}

const limeGreen = new Scooter("limeGreen", 20, 100);
console.log(limeGreen.speedLimit);

module.exports = Scooter