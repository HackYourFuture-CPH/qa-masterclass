# QA-Masterclass: Web Automation Testing using Playwright
QA Engineering Masterclass week 03, in this class a new test automation project using Playwright in TypeScript is created. This GitHub repository demonstrates how to setup and run the `Playwright` test automation framework for web apps on multiple web browsers: Chrome, Firefox, and webKit (Safari).

## Prerequisites

In order to utilise this project the following tools are required to be installed locally:

1. A recent version of [Node.js](https://nodejs.org/).
2. A good coding editor like [Visual Studio Code](https://code.visualstudio.com/).


## Installation

```
git clone https://github.com/HackYourFuture-CPH/qa-masterclass
```

## Running the Example automation test

1. Navigate to the root directory:

```
cd qa-masterclass
```

2. Install dependencies required to run the tests:

```
npm install
```

3. To run the test in all three web browsers : Chrome, Firefox, and webKit (Safari)

```
npm test
```

4. To run the test only in Chrome

```
npm run test:chrome
```

5. To view the test report

```
npm run playwright:report
```
