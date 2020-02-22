const hey = require('../modules/bob')

describe('Bob', () => {

  test('Question', () => {
    const result = hey('Is this the real life? Is this just fantasy?')
    expect(result).toEqual('Sure.')
  })

  test('Question', () => {
    const result = hey('Scaramouche, Scaramouche, will you do the Fandango?')
    expect(result).toEqual('Sure.')
  })

  test('Question with numbers', () => {
    const result = hey('321?')
    expect(result).toEqual('Sure.')
  })

  test('Question with a number', () => {
    const result = hey('Is Queen #1?')
    expect(result).toEqual('Sure.')
  })

  test('Question with whitespace after question mark', () => {
    const result = hey('So you think you can love me and leave me to die?   ')
    expect(result).toEqual('Sure.')
  })

  test('Emoticon ending with question mark', () => {
    const result = hey('(・・?')
    expect(result).toEqual('Sure.')
  })

  test('Statement', () => {
    const result = hey('Thunderbolt and lightning, Very, very frightening me.')
    expect(result).toEqual('Whatever.')
  })

  test('Statement', () => {
    const result = hey('Beelzebub has a devil put aside for me, for me, for me!')
    expect(result).toEqual('Whatever.')
  })

  test('Statement', () => {
    const result = hey('3, 2, 1')
    expect(result).toEqual('Whatever.')
  })

  test('Statement starting with whitespace', () => {
    const result = hey('         Magnifico-o-o-o-o...')
    expect(result).toEqual('Whatever.')
  })

  test('Statement ending with whitespace', () => {
    const result = hey('Magnifico-o-o-o-o...   ')
    expect(result).toEqual('Whatever.')
  })

  test('Yelling a question', () => {
    const result = hey('EASY COME, EASY GO, WILL YOU LET ME GO?')
    expect(result).toEqual('Whoa, chill out!')
  })

  test('Yelling', () => {
    const result = hey('3, 2, 1, BLASTOFF!!')
    expect(result).toEqual('Whoa, chill out!')
  })

  test('Yelling', () => {
    const result = hey('LET ME GO!')
    expect(result).toEqual('Whoa, chill out!')
  })

  test('Nothing', () => {
    const result = hey('')
    expect(result).toEqual('Fine. Be that way!')
  })

  test('Whitespace', () => {
    const result = hey('   ')
    expect(result).toEqual('Fine. Be that way!')
  })

  test('Whitespace', () => {
    const result = hey('\t\r\n')
    expect(result).toEqual('Fine. Be that way!')
  })

})