const proponojsConfig = require('proponojs').env_config;
const proponojs = require('proponojs').proponojs(proponojsConfig);

exports.handle = function (event, context, callback) {
    var time = new Date();
    const message = {
        lambda: 'dummy', 
        time: time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
    };

    proponojs.publish('development-ml-lambda-executed', message, function (err, data) {
        var code = '200';
        if (err) {
            code = '500';
        }
        var response = {
            statusCode: '200',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/vnd.api+json'
            },
            isBase64Encoded: false
        };
        callback(null, response);
    });
};
