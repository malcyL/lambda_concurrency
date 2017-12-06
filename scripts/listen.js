const proponojsConfig = require('proponojs').env_config;
const proponojs = require('proponojs').proponojs(proponojsConfig);

proponojs.listen('development-ml-lambda-executed',(message, done) => {
  console.log('Message received...');
  console.log('message: ' + JSON.stringify(message));
  done();
});
