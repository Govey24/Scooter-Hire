const { TestWatcher } = require('jest')
const Account = require('./account')

describe('defines a suite of tests for the Account class', function () {

    test('has email address', function() {
        const account = new Account ("liam@hotmail.com", "01234567890", "ApplePay")

        expect(account.email).toBe("liam@hotmail.com")
    })
})