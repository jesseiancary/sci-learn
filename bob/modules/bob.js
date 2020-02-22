const hey = (sentence) => {

  sentence = sentence.trim()
  let reply

  // No sentence: Sentence is an empty string.
  if (sentence.length === 0) {
    reply = 'Fine. Be that way!'
  } else

  // Yelling: Sentence is in all caps.
  if (sentence.match(/[a-z]/g) === null && sentence.match(/[A-Z]/g) !== null) {
    reply = 'Whoa, chill out!'
  } else

  // Question: Sentence ends in question mark.
  if (sentence[sentence.length - 1] === '?') {
    reply = 'Sure.'
  } else

  // Everything else
  {
    reply = 'Whatever.'
  }

  return reply

}

module.exports = hey