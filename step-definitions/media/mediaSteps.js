const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { sendHttpRequest } = require('../../utils/httpService');
const endpoints = require('../../config/endpoints');


Given('I send a {string} request to {string}', async function (method, key) {
    const endpoint = endpoints[key];

    if (!endpoint) {
        throw new Error(`Endpoint key "${key}" not found in endpoints.js`);
    }
    this.apiResponse = await sendHttpRequest({
        method,
        endpoint,
        body: null
    });
});

Then('I should receive a {int} status code', async function (expectedStatus) {
    expect(this.apiResponse.status).to.equal(expectedStatus);
});

Then('the response time should be under {int} milliseconds', function (maxTime) {
    expect(this.apiResponse.responseTime).to.be.above(0).and.lessThan(maxTime);
});


Then('each media item should have a non-empty id and segment_type as music', function () {
    const items = this.apiResponse.data.data;
    expect(items).to.be.an('array').that.is.not.empty;

    items.forEach((item, index) => {
        expect(item, `Item at index ${index} is undefined`).to.be.an('object');
        expect(item).to.have.property('id').that.is.a('string').and.not.empty;
        expect(item).to.have.property('segment_type').that.equals('music');
    });
});


Then('each media item should have a non-empty primary title', function () {
    const items = this.apiResponse.data.data;

    items.forEach((item, index) => {
        expect(item).to.have.property('title_list').that.is.an('object');
        expect(item.title_list).to.have.property('primary').that.is.a('string').and.not.empty;
    });
});

Then('only one media item should have now_playing set to true', function () {
    const items = this.apiResponse.data.data;

    const nowPlayingItems = items.filter((item, index) => {
        expect(item).to.have.property('offset').that.is.an('object');
        return item.offset.now_playing === true;
    });

    expect(nowPlayingItems.length).to.equal(1);
});

Then('the response headers should include a Date value', function () {
    const headers = this.apiResponse.headers;

    expect(headers).to.have.property('date');

    const dateValue = headers.date;
    expect(dateValue).to.be.a('string').and.not.empty;

    const parsedDate = new Date(dateValue);
    expect(parsedDate.toString()).to.not.equal('Invalid Date');
});
