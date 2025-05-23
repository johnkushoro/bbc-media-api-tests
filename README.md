# 📁 BBC-UCC Media API Test Automation

Welcome!  
This project contains both **automated** and **manual** test scenarios created for the **BBC Senior Tester Take-Home Assessment**.  
It reflects real-world API testing using JavaScript, Cucumber, Chai, and Axios — with a focus on clean structure, readable reporting, and ease of use.

---

## 🎯 Objective

Validate the Media API endpoint:  
`https://testapi.io/api/ottplatform/media`

The endpoint returns a collection of 14 music tracks. These tests ensure:

- ✅ Data integrity
- ✅ Performance (speed)
- ✅ Content correctness

---

## 📋 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node)

---

## 🛠️ Technologies Used

- JavaScript (Node.js)
- Cucumber.js – BDD-style Gherkin syntax
- Chai – Assertion library
- Axios – HTTP client
- cucumber-html-reporter – HTML report generation

---

## 🗂️ Project Structure

```
bbc-ucc-api-automation/
├── config/                       # API endpoint configuration
│   └── endpoints.js
├── features/                    # Gherkin test scenarios
│   └── media/
│       ├── media.feature
│       └── manual_tests.feature
├── node_modules/               # Project dependencies
├── reports/                    # JSON and HTML test reports
├── step-definitions/           # Step definitions mapped to feature steps
│   └── media/
│       └── mediaSteps.js
├── support/                    # Shared test setup/hooks
│   └── hooks.js                # (if different from the media/hooks.js)
├── utils/                      # Utility functions (e.g., HTTP calls)
│   └── httpService.js
├── .gitignore
├── cucumber.js                 # Cucumber config
├── generate-report.js         # HTML report generator script
├── package.json
├── package-lock.json
├── run-parallel.js            # Script for parallel test execution
└── README.md

```


---

## ✅ Automated Test Scenarios

These are implemented using Gherkin and cover the following checks:

| Tag         | Description                                                       |
|-------------|-------------------------------------------------------------------|
| @scenario1  | Check that the media endpoint returns a 200 status and is fast    |
| @scenario2  | Validate that each item has an ID and `segment_type` as `music`   |
| @scenario3  | Ensure each item includes a non-empty `primary` title             |
| @scenario4  | Ensure only one media item is marked as `now_playing: true`       |
| @scenario5  | Confirm the response headers include a `Date` value               |

Additional scenarios validate:
- Structure of `title_list` (must include `primary` field of type string)
- Optional `duration` (if present, must be a number > 0)
- Structure of `offset` object (must exist and may include `now_playing`)

---

## 🚀 How to Run the Tests

### 🔹 Install Dependencies
```bash

 npm install
 ```

🔹 Run All Tests + Generate Report
npm run test:report

🔹 Run Individual Scenarios
npm run scenario3     # Replace with scenario1–5 to run a specific one

🔹 Run All Scenarios in Parallel (CPU Optimized)
npm run run-all-parallel


## 🔄 Test Hooks
Global setup/teardown logic is handled in support/hooks.js, which logs the scenario name and resets the response before each test.

## 📊 Reporting
After each run, a report is automatically generated at:
reports/cucumber_report.html


## ❗ Troubleshooting
- Make sure the API https://testapi.io/api/ottplatform/media is reachable.
- If report generation fails, delete reports/output.json and retry.
- Ensure no syntax errors in feature or step-definition files.

## 👤 Author

**John Kushoro**  
🔗 GitHub: [johnkushoro](https://github.com/johnkushoro)





