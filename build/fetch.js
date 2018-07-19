'use strict';

module.exports = function (url, options) {

    let retries = 3;
    let retryDelay = 1000;
    let timeout = 4000;

    if (options && options.retries) {
        retries = options.retries;
    }
    if (options && options.timeout) {
        timeout = options.timeout;
    }
    if (options && options.retryDelay) {
        retryDelay = options.retryDelay;
    }
    let timeoutCallBack = new Promise((resolve, reject) => {
        setTimeout(reject, timeout, 'request timeout');
    });

    return Promise.race([timeoutCallBack, new Promise(function (resolve, reject) {
        let wrappedFetch = function (n) {
            fetch(url, options).then(function (response) {
                if (response.ok) resolve(response);else throw error('bad error code' + response.status);
            }).catch(function (error) {
                if (n > 0) {
                    setTimeout(function () {
                        wrappedFetch(--n);
                    }, retryDelay);
                } else {
                    reject(error);
                }
            });
        };
        wrappedFetch(retries);
    })]);
};