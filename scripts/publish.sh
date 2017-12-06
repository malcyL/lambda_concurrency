const proponojsConfig = require('proponojs').env_config;
const proponojs = require('proponojs').proponojs(proponojsConfig);

const message = {file: 'toBeProcessed.txt'};
for (i = 0; i < 10; i++) {
  proponojs.publish('development-ml-lambda-trigger', message, (err, data) => {
    console.log('Publish completed...');
    if (err) {
      console.log('Error: ' + err);
    } else {
      console.log('Data: ' + JSON.stringify(data));
    }
  });
}

