# qa-masterclass
QA Engineering Masterclass test automation project using Playwright framework

# Prerequisites
* Development environment: visual studio code
* Programming language: nodejs & typescript
* Testing Framework: Playwright
* Version control system: Git


# Setup
Steps to be followed in order to setup test automation environment 

* Clone the repository: git clone https://github.com/HackYourFuture-CPH/qa-masterclass
* Create & checkout: git checkout -b <your-branch-name>
* Install dependencies: npm install 
* Install Framework: npm init playwright@latest


# Test Framework

* POM(Page Object Model) is a test design pattern for automation is used.

* In order to test there must be corresponding Page class for each web page/section/component in the application.


# Test Execution

* npm run test/npx playwright test (to run the test on all 3 browsers)
* npx playwright test --project:chromium (to run the specific chromium browsers)
* npm run playwright:report (to show the report)


# Contribution

* Any contribution will be highly appreciated using the above setup steps and creating a new Pull Request.