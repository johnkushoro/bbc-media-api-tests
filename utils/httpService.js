const axios = require('axios');

async function sendHttpRequest({ method, endpoint, queryParams = {}, body = null, headers = {} }) {
    const queryString = Object.keys(queryParams).length
        ? `?${new URLSearchParams(queryParams).toString()}`
        : '';
    const fullUrl = `${endpoint}${queryString}`;

    const start = Date.now();

    const response = await axios({
        url: fullUrl,
        method: method.toLowerCase(),
        data: body,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    });

    const duration = Date.now() - start;

    return {
        status: response.status,
        data: response.data,
        headers: response.headers,
        responseTime: duration
    };
}

module.exports = { sendHttpRequest };
