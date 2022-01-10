const { TestWatcher } = require('jest')
const chargePoint = require('./chargePoint')
const hireCompany = require('./hireCompany')

describe('defines a suite of tests for the chargePoint class', function () {

    test('has location', function() {
        const hampsonPark = new chargePoint ("Stevenage")

        expect(hampsonPark.location).toBe("Stevenage")
    })
})