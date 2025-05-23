const fs = require('fs');
const path = require('path');
const reporter = require('cucumber-html-reporter');

const reportsDir = path.join(__dirname, 'reports');

if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
}

const options = {
    theme: 'bootstrap',
    jsonFile: path.join(reportsDir, 'output.json'),  // ⬅ this matches your test script output
    output: path.join(reportsDir, 'cucumber_report.html'),
    reportSuiteAsScenarios: true,
    launchReport: true
};

reporter.generate(options);
