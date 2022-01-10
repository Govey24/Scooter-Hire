const Account = require('./account')
const Scooter = require('./scooter')
const chargePoint = require('./chargePoint')
const hireCompany = require('./hireCompany')


class User {

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    hasHiredScooter() {
        if (User.hasHiredScooter = true) {
            return "in use";
        } else {
            return "Available";
        }
    }
}

const user = new User("Liam", "Stevenage", "in use")
console.log(user.name);
console.log(user.location);

module.exports = User