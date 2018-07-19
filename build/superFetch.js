'use strict';

import fetch from './fetch';

function superFetch(url, options, onLoad, onRetry) {

    fetch(url, options).then(function (response) {
        response.json().then(function (res) {
            onLoad(res);
        });
    }).catch(function (error) {

        onRetry(error);
    });
}

export default superFetch;