const hireCompany = require('./hireCompany')
const Scooter = require('./scooter')

class maintenanceTeam {

    constructor(name, employeeNumber, location) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.location = location;
    }
}

const John = new maintenanceTeam("John", "12345", "Stevenage")
console.log(John.location);

module.exports = maintenanceTeam