const { Before } = require('@cucumber/cucumber');

Before(function (scenario) {
    console.log(`Running scenario: ${scenario.pickle.name}`);
    this.apiResponse = null;
});
