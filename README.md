# ANST API Training

This project contains **Playwright-based API tests** designed for the ANST (Association of Nigeria Software Testers) training program.

## Features
- Dynamic email generation for test accounts
- OTP flow automation and validation
- Integration with Allure for rich test reporting
- Reusable utilities and clean test structure

## Setup
```bash
npm install
npx playwright install
npm install -D allure-playwright
```

## Run Tests
```bash
npm run api     # Executes all API tests
```

## Generate Allure Report
```bash
npm run allure  # Generates the Allure results
npm run report  # Opens the Allure report in your browser
```

## Project Structure
.
├── tests/              # All test cases
├── utils/              # Utility functions (e.g., random email)
├── allure-results/     # Allure raw test result files (auto-generated)
├── allure-report/      # Allure HTML report (auto-generated)
├── playwright.config.js
├── package.json
└── README.md
