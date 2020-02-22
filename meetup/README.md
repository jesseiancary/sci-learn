
# Meetup

A program to calculate the date of a Meetup.

## Task Description


Calculate the date of meetups.
Typically meetups happen on the same day of the week.

Examples are
-   the first Monday
-   the third Tuesday
-   the Wednesteenth
-   the last Thursday

Note that "Monteenth", "Tuesteenth", etc are all made up words. There was a meetup whose members realised that there are exactly 7 days that end in '-teenth'. Therefore, one is guaranteed that each day of the week (Monday, Tuesday, ...) will have exactly one date that is named with '-teenth' in every month.

----------

Write a module  `meetup`  that has a function  `meetupDay(int, int, string, string)`  that accepts the following arguments:

-   An integer representing the year
-   An integer representing the month of year (1 for January, 12 for December, etc.)
-   A string representing the day of week, eg ("Monday", "Sunday", etc.)
-   A string representing the meetup schedule, eg ("1st", "2nd", "3rd", "4th", "last", "teenth")

This function should return the date of the meetup for the given month/year as a JavaScript  `Date`  object.

## Getting Started

### Prerequisites

Before running this project, you will need **NodeJS** installed and running. Check the following link for instructions specific to your platform:
[Installing Node.js via a package manager](https://nodejs.org/en/download/package-manager/)

### Installing

Clone the project from GitHub:
```bash
git clone https://github.com/jesseiancary/sci-learn.git
```

Build the `meetup` project:
```bash
cd sci-learn/meetup
npm install
```

## Running the project

### Usage

The `meetup` program is CLI based, here are instructions for running it on the command line:
```bash
Usage: node . <year> <month> <dayOfWeek> <schedule>

dayOfWeek: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
schedule: 1st, 2nd, 3rd, 4th, last, teenth
```

#### Example 1
```bash
node . 2013 4 Tuesday 1st
```
Will output:
```bash
2013-05-07T07:00:00.000Z
```

#### Example 2
```bash
node . 2013 4 Monday teenth
```
Will output:
```bash
2013-05-13T07:00:00.000Z
```

#### Installing the program (optional)
You may also install the program so that you can use the command `meetup` instead of `node .` for running it.

Run the following command to *install*:
```bash
npm install -g .
```

Run the following command to *uninstall*:
```bash
npm uninstall -g meetup
```

## Testing

The `meetup` project comes with a built-in unit tester using **Jest**.

To run the unit tests, simply run the following command:
```bash
npm test
```

You may also modify any unit tests, or add your own by editing the `/meetup/tests/meetup.spec.js` file.