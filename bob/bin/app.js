#!/usr/bin/env node

const yargs = require('yargs')
const hey = require('../modules/bob')

const usage = `
Usage: node . "<sentence>"
`

const options = yargs
  .usage(usage)
  .demandCommand(1)
  .help(usage)
  .argv

console.log(hey(options._[0]))