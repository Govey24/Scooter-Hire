class hireCompany {

    constructor(companyName, contactNumber, email) {
        this.companyName =companyName;
        this.contactNumber = contactNumber;
        this.email = email;
    }
}

const Tier = new hireCompany("Tier", "09876543219", "john@tier.com")
console.log(Tier.email);

module.exports = hireCompany