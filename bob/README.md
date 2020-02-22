
# Bob

A program to communicate with a lackadaisical teenager named Bob.

## Task Description

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.\
He answers 'Whoa, chill out!' if you yell at him.\
He says 'Fine. Be that way!' if you address him without actually saying anything.\
He answers 'Whatever.' to anything else.

----------

Create a module called  `bob`  with a function  `hey`.

`hey`  Takes a single sentence as input, and returns a sentence as a response.\
A sentence is just a  `String`  of any length.\
A question is any sentence that ends with a question mark.\
A sentence is yelled if it is in all caps.\
A sentence that says nothing is one made entirely of white space.

## Getting Started

### Prerequisites

Before running this project, you will need **NodeJS** installed and running. Check the following link for instructions specific to your platform:\
[Installing Node.js via a package manager](https://nodejs.org/en/download/package-manager/)

### Installing

Clone the project from GitHub:
```bash
git clone https://github.com/jesseiancary/sci-learn.git
```

Build the `bob` project:
```bash
cd sci-learn/bob
npm install
```

## Running the project

### Usage

The `bob` program is CLI based, here are instructions for running it on the command line:
```bash
Usage: node . "<sentence>"
```

#### Example 1
```bash
node . "Is this the real life? Is this just fantasy?"
```
Will output:
```bash
Sure.
```

#### Example 2
```bash
node . "LET ME GO!"
```
Will output:
```bash
Whoa, chill out!
```

#### Installing the program (optional)
You may also install the program so that you can use the command `bob` instead of `node .` for running it.

Run the following command to *install*:
```bash
npm install -g .
```

Run the following command to *uninstall*:
```bash
npm uninstall -g bob
```

## Testing

The `bob` project comes with a built-in unit tester using **Jest**.

To run the unit tests, simply run the following command:
```bash
npm test
```

You may also modify any unit tests, or add your own by editing the `/bob/tests/bob.spec.js` file.