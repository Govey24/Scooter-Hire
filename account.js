const User = require('./user')
const DVLA = require('./dvla')

class Account {

    constructor(email, contactNumber, paymentMethod) {
        this.email = email;
        this.contactNumber = contactNumber;
        this.paymentMethod = paymentMethod;
    }
    isVerified() {
        if (DVLA = verified) {
            return "yes"
        } else {
            return "no";
        }
        
    }
}

const account = new Account ("liam@hotmail.com", "01234567890", "ApplePay")
console.log(account.email);
console.log(account.contactNumber);
console.log(account.paymentMethod);

module.exports = Account