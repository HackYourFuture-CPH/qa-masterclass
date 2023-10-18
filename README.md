# Playwright TypeScript Test Automation

A test automation project using Playwright and TypeScript for QA-Masterclass homework.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Test Structure](#test-structure)
6. [Running Tests](#running-tests)
7. [Test Reporting](#test-reporting)
8. [Contributing](#contributing)
9. [License](#license)

## Getting Started

Welcome to my first Playwright TypeScript Test Automation task. This project is designed to demonstrate skills that I learned at Hack Your Future Denmark QA-Master Class by Planday. The task provides a framework for creating and running Playwright tests in TypeScript.

## Prerequisites

Before you get started, ensure you have the following prerequisites installed:

    - [Node.js](https://nodejs.org/)
    - [npm](https://www.npmjs.com/)
    - [Playwright](https://playwright.dev/docs/intro#installing-playwright)

Recommended versions:

    - Node.js: 20.1.0 or later
    - npm: 9.6.4 or later
    - Playwright: 1.39.0 or later


## Installation

1. Clone the repository:
   
       git clone https://github.com/HackYourFuture-CPH/qa-masterclass
   
3. Navigate to the cloned directory:
   
       cd qa-masterclass

5. Install dependencies:

       npm install

## Usage

To run all tests, use the following command:
    
    npm run test
    
For specific browsers, you can use:

Chrome: 
    `npm run test:chrome`
    
Firefox: 
    `npm run test:firefox`
    
WebKit: 
    `npm run test:webkit`

## Test Structure

Our tests are organized into suites and test cases. You can find test files in the `tests` directory. Each suite has its own file, and within each suite file, you can define individual test cases using Playwright.

## Running Tests

You can run tests locally by simply executing the following command:

    npm run test

To run tests on other browsers, use one of the following commands:

Run tests in Chrome
    `npm run test:chrome`

Run tests in Firefox
    `npm run test:firefox`

Run tests in WebKit
    `npm run test:webkit`

## Test Reporting

Test results are reported using the built-in Playwright test runner. After test execution, you can find detailed reports executing the following command:

    npm run playwright:report

## Contributing
    
We welcome contributions to this project! If you'd like to contribute, please follow our [Contribution Guidelines](https://github.com/HackYourFuture-CPH/qa-masterclass).


## License

This project is licensed under the MIT License. See the LICENSE file for details.

