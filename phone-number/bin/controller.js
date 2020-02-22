const PhoneNumber = require('../classes/PhoneNumber.js')

const process_input = (options) => {

  const phoneNumber = new PhoneNumber(options._[0])

  let output

  if (options.number) {
    output = phoneNumber.number
  } else

  if (options.area) {
    output = phoneNumber.areaCode
  } else

  if (options.exchange) {
    output = phoneNumber.exchangeCode
  } else

  if (options.line) {
    output = phoneNumber.lineNumber
  } else

  if (options.pretty) {
    output = phoneNumber.pretty
  }

  return output

}

module.exports = process_input