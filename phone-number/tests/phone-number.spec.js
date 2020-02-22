const PhoneNumber = require('../classes/PhoneNumber.js')

describe('Phone Number Validator/Parser', () => {

    test('Test PhoneNumber.number() method', () => {
      const phoneNumber = new PhoneNumber('(310) 402-1183')
      expect(phoneNumber.number).toEqual('3104021183')
    })

    test('Test PhoneNumber.areaCode() method', () => {
      const phoneNumber = new PhoneNumber('(310) 402-1183')
      expect(phoneNumber.areaCode).toEqual('310')
    })

    test('Test PhoneNumber.exchangeCode() method', () => {
      const phoneNumber = new PhoneNumber('(310) 402-1183')
      expect(phoneNumber.exchangeCode).toEqual('402')
    })

    test('Test PhoneNumber.lineNumber() method', () => {
      const phoneNumber = new PhoneNumber('(310) 402-1183')
      expect(phoneNumber.lineNumber).toEqual('1183')
    })

    test('Test PhoneNumber.pretty() method', () => {
      const phoneNumber = new PhoneNumber('3104021183')
      expect(phoneNumber.pretty).toEqual('(310) 402-1183')
    })

    test('Test PhoneNumber.number() method with dots', () => {
      const phoneNumber = new PhoneNumber('310.402.1183')
      expect(phoneNumber.number).toEqual('3104021183')
    })

    test('Test PhoneNumber.number() method with dashes', () => {
      const phoneNumber = new PhoneNumber('310-402-1183')
      expect(phoneNumber.number).toEqual('3104021183')
    })

    test('Test PhoneNumber.number() method with multiple spaces', () => {
      const phoneNumber = new PhoneNumber('310 402   1183   ')
      expect(phoneNumber.number).toEqual('3104021183')
    })

    test('Invalid when less than 10 digits', () => {
      expect(() => {
        const phoneNumber = new PhoneNumber('(310) 402-118')
        phoneNumber.number
      }).toThrow(
        new Error('Phone number is too short')
      )
    })

    test('Invalid when greater than 10 digits', () => {
      expect(() => {
        const phoneNumber = new PhoneNumber('(310) 402-11833')
        phoneNumber.number
      }).toThrow(
        new Error('Phone number is too long')
      )
    })

    test('Test PhoneNumber.number() method starting with +1', () => {
      const phoneNumber = new PhoneNumber('13104021183')
      expect(phoneNumber.number).toEqual('3104021183')
    })

    test('Test PhoneNumber.number() method starting with +1 and punctuation', () => {
      const phoneNumber = new PhoneNumber('+1 (310) 402-1183')
      expect(phoneNumber.number).toEqual('3104021183')
    })

    test('Invalid when 11 digits, not starting with "1"', () => {
      expect(() => {
        const phoneNumber = new PhoneNumber('+2 (310) 402-1183')
        phoneNumber.number
      }).toThrow(
        new Error('Phone number is too long')
      )
    })

    test('Invalid when greater than 11 digits, starting with "1"', () => {
      expect(() => {
        const phoneNumber = new PhoneNumber('+1 (310) 402-11833')
        phoneNumber.number
      }).toThrow(
        new Error('Phone number is too long')
      )
    })

})