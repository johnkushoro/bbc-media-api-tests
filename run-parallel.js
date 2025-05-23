const { exec } = require("child_process");
const os = require("os");
const fs = require("fs");

const cores = os.cpus().length;
const reportDir = 'reports';

console.log(`💡 Detected ${cores} CPU cores — running tests in parallel...\n`);

exec(`npx cucumber-js --parallel ${cores} --require step-definitions --format json:${reportDir}/output.json`, (err, stdout, stderr) => {
    if (err) {
        console.error('Test run failed:\n', stderr);
        process.exit(1);
    } else {
        console.log('Test run complete:\n', stdout);

        const reporter = require('cucumber-html-reporter');

        const options = {
            theme: 'bootstrap',
            jsonFile: `${reportDir}/output.json`,
            output: `${reportDir}/cucumber_report.html`,
            reportSuiteAsScenarios: true,
            launchReport: true
        };

        reporter.generate(options);
    }
});
