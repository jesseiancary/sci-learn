class PhoneNumber {

  constructor(phone_number) {

    // Strip all non-numeric characters
    this._number = phone_number.toString().replace(/\D/g, '')

    // If the first digit is '1', remove it
    if (this._number[0] === '1') this._number = this._number.substr(1)

    // At this point, the number length must be 10
    if (this._number.length < 10) throw new Error('Phone number is too short')
    if (this._number.length > 10) throw new Error('Phone number is too long')

    // Extract the 'area', 'exchange', and 'line' parts of the number
    let phone_number_parsed = this._number.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (phone_number_parsed) {
      this._area = phone_number_parsed[1]
      this._exchange = phone_number_parsed[2]
      this._line = phone_number_parsed[3]
      this._pretty = '(' + phone_number_parsed[1] + ') ' + phone_number_parsed[2] + '-' + phone_number_parsed[3]
    } else {
      throw new Error('Phone number is not valid')
    }

  }

  get number() {
    return this._number
  }

  get areaCode() {
    return this._area
  }

  get exchangeCode() {
    return this._exchange
  }

  get lineNumber() {
    return this._line
  }

  get pretty() {
    return this._pretty
  }

}

module.exports = PhoneNumber