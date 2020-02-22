
# Phone Number

A program to validate, prettify, and extract elements of phone numbers.

## Task Description
Write a program that cleans up user-entered phone numbers so that they can be sent SMS messages.

The rules are as follows:

-   If the phone number is less than 10 digits assume that it is bad number
-   If the phone number is 10 digits assume that it is good
-   If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
-   If the phone number is 11 digits and the first number is not 1, then it is a bad number
-   If the phone number is more than 11 digits assume that it is a bad number

----------

Write a class  `PhoneNumber`  with a constructor  `PhoneNumber(string)`  that throws an exception on any invalid input.\
It has a method  `number()`  that returns a string representation of all 10 numerical digits. EG  `"4158675309"`\
It has a method  `areaCode()`  that returns a string of the first three digits EG  `"415"`\
It has a method  `exchangeCode()`  that returns a string of the next three digits EG  `"867"`\
It has a method  `lineNumber()`  that returns a string of the last four digits EG  `"5309"`\
It has a method  `pretty()`  that returns the number formatted as  `"(XXX) XXX-XXXX"`  EG  `"(415) 867-5309"`

## Getting Started

### Prerequisites

Before running this project, you will need **NodeJS** installed and running. Check the following link for instructions specific to your platform:\
[Installing Node.js via a package manager](https://nodejs.org/en/download/package-manager/)

### Installing

Clone the project from GitHub:
```bash
git clone https://github.com/jesseiancary/sci-learn.git
```

Build the `phone-number` project:
```bash
cd sci-learn/phone-number
npm install
```

## Running the project

### Usage

The `phone-number` program is CLI based, here are instructions for running it on the command line:
```bash
Usage: node . [option] "<phone_number>"

Options:
-h, --help: Print these usage instructions.
-n, --number: Return all 10 numbers.
-a, --area: Return the area code.
-e, --exchange: Return the exchange code.
-l, --line: Return the line number.
-p, --pretty: Return phone number formatted as "(xxx) xxx-xxxx".
```

#### Example 1
```bash
node . --pretty 13104021183
```
Will output:
```bash
(310) 402-1183
```

#### Example 2
```bash
node . --line "+1 (310) 402-1183"
```
Will output:
```bash
1183
```

#### Installing the program (optional)
You may also install the program so that you can use the command `phone-number` instead of `node .` for running it.

Run the following command to *install*:
```bash
npm install -g .
```

Run the following command to *uninstall*:
```bash
npm uninstall -g phone-number
```

## Testing

The `phone-number` project comes with a built-in unit tester using **Jest**.

To run the unit tests, simply run the following command:
```bash
npm test
```

You may also modify any unit tests, or add your own by editing the `/phone-number/tests/phone-number.spec.js` file.