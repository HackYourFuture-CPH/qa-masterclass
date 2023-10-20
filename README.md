# TypeScript Automation Testing with Playwright


Welcome to the Playwright Automation Tool! Playwright is a powerful end-to-end testing and automation tool for modern web applications. With Playwright, you can write scripts to interact with web pages, automate tasks, and perform various testing scenarios with ease. 

## Getting Started:

This section will guide you on how to get started with the tool.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

* Node
* GIT
* Visual Studio Code (Recommended) or any preferred code editior


## Installation
# On VS Code Terminal run

* git clone https://github.com/HackYourFuture-CPH/qa-masterclass.git to clone git repo

# install Playwright using npm
    * npm init playwright@latest
    * Run the install command and select the following to get started:
    * Choose between TypeScript or JavaScript (default is TypeScript)
    * Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
    * Add a GitHub Actions workflow to easily run tests on CI
    * Install Playwright browsers (default is true)

# After the playwrite installation 
  * run npm init (to install the dependencies)
  * add the Scripts to Package.json to run the test ("scripts":{
    "test": "npx playwright test --hedded",
    "test:chrome": "npx playwright test --project=chromium",
    "playwright:report": "npx playwright show-report"
  })

# commands ro run tests
  * npm run test - to run the test in different browsers
  * npm run playwright:report - to show the report

# Examples
  For more code examples and use cases, check out the Playwright Examples Repository.[https://github.com/microsoft/playwright-examples]

# Documentation
You can find detailed documentation and guides on using Playwright in the Playwright Documentation.[https://playwright.dev/docs/intro]
  



