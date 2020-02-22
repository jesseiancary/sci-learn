#!/usr/bin/env node

const yargs = require('yargs')
const process_input = require('./controller')

const usage = `
Usage: node . [option] "<phone_number>"

Options:
  -n, --number:    Return all 10 numbers.
  -a, --area:      Return the area code.
  -e, --exchange:  Return the exchange code.
  -l, --line:      Return the line number.
  -p, --pretty:    Return phone number formatted as "(xxx) xxx-xxxx".
`

const options = yargs
  .usage(usage)
  .option('-help',     { alias: 'h', type: 'boolean', demandOption: false, describe: 'Display usage' })
  .option('-number',   { alias: 'n', type: 'boolean', demandOption: false, describe: 'Return all 10 numbers' })
  .option('-area',     { alias: 'a', type: 'boolean', demandOption: false, describe: 'Return the area code' })
  .option('-exchange', { alias: 'e', type: 'boolean', demandOption: false, describe: 'Return the exchange code' })
  .option('-line',     { alias: 'l', type: 'boolean', demandOption: false, describe: 'Return the line number' })
  .option('-pretty',   { alias: 'p', type: 'boolean', demandOption: false, describe: 'Return phone number formatted as "(xxx) xxx-xxxx"', default: true })
  .demandCommand(1)
  .help(usage)
  .argv

console.log(process_input(options))