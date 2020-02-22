#!/usr/bin/env node

const yargs = require('yargs')
const meetupDay = require('../modules/meetup.js')

const usage = `
Usage: node . <year> <month> <dayOfWeek> <schedule>

dayOfWeek: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
schedule: 1st, 2nd, 3rd, 4th, last, teenth
`

const options = yargs
  .usage(usage)
  .option('-help', { alias: 'h', type: 'boolean', demandOption: false, describe: 'Display usage' })
  .demandCommand(4)
  .help(usage)
  .argv

const year = options._[0]
const month = options._[1]
const dayOfWeek = options._[2]
const schedule = options._[3]

console.log(meetupDay(year, month, dayOfWeek, schedule))