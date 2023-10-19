# Test automation

Automated testing is a software testing technique that automates the process of validating the functionality of software and ensures it meets requirements before being released into production.
<br/>
With automated testing, an organization can run specific software tests at a faster pace without human testers. Automated testing is best suited for large or repetitive test cases.

## Requirements

Installing requirements tool below, Recommend latest version

- [NodeJs](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/cli/v8/commands/npm-install)
- [Playwright](https://playwright.dev/docs/intro)
- [VS Code](https://code.visualstudio.com/)
- [GitHub Account](https://github.com/)

## Get started

- Clone respository

```
git clone https://github.com/HackYourFuture-CPH/qa-masterclass
```

- Navigate to clone directory

```
cd qa-masterclass

```

- npm install in terminal
- npm init playwright@latest
  - select typescript
  - Add a GitHub Actions workflow? yes
  - Install Playwright browsers (can be done manually via 'npx playwright install')? yes
- Adding script tag in package.json

```
"scripts": {
"test": "npx playwright test --headed",
"test:chrome": "npx playwright test --project=chromium",
"playwright:report": "npx playwright show-report"
}
```

## How to run test

- npm run test: To run the all test in all browser
- npm run playright:report: To show the report
