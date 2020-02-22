const meetupDay = require('../modules/meetup')

describe('meetupDay()', () => {

  test('Monteenth of may 2013', () => {
    expect(meetupDay(2013, 4, 'Monday', 'teenth')).toEqual(new Date(2013, 4, 13))
  })

  test('Saturteenth of february 2013', () => {
    expect(meetupDay(2013, 1, 'Saturday', 'teenth')).toEqual(new Date(2013, 1, 16))
  })

  test('First tuesday of may 2013', () => {
    expect(meetupDay(2013, 4, 'Tuesday', '1st')).toEqual(new Date(2013, 4, 7))
  })

  test('Second monday of april 2013', () => {
    expect(meetupDay(2013, 3, 'Monday', '2nd')).toEqual(new Date(2013, 3, 8))
  })

  test('Third thursday of september 2013', () => {
    expect(meetupDay(2013, 8, 'Thursday', '3rd')).toEqual(new Date(2013, 8, 19))
  })

  test('Fourth sunday of march 2013', () => {
    expect(meetupDay(2013, 2, 'Sunday', '4th')).toEqual(new Date(2013, 2, 24))
  })

  test('Last thursday of october 2013', () => {
    expect(meetupDay(2013, 9, 'Thursday', 'last')).toEqual(new Date(2013, 9, 31))
  })

  test('Last wednesday of february 2012', () => {
    expect(meetupDay(2012, 1, 'Wednesday', 'last')).toEqual(new Date(2012, 1, 29))
  })

  test('Last wednesday of december 2014', () => {
    expect(meetupDay(2014, 11, 'Wednesday', 'last')).toEqual(new Date(2014, 11, 31))
  })

  test('Last sunday of only four week february 2015', () => {
    expect(meetupDay(2015, 1, 'Sunday', 'last')).toEqual(new Date(2015, 1, 22))
  })

  test('First friday of december 2012', () => {
    expect(meetupDay(2012, 11, 'Friday', '1st')).toEqual(new Date(2012, 11, 7))
  })

})
