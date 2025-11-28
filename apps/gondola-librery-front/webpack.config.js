const path = require('path');

module.exports = (config) => {
  config.resolve.alias['@primeng-v17'] = path.resolve(
    __dirname,
    '../../node_modules/primeng-v17'
  );
  config.resolve.alias['@primeng-v16'] = path.resolve(
    __dirname,
    '../../node_modules/primeng-v16'
  );
  config.resolve.alias['@primeng-v18'] = path.resolve(
    __dirname,
    '../../node_modules/primeng-v18'
  );
  config.resolve.alias['@primeng-v19'] = path.resolve(
    __dirname,
    '../../node_modules/primeng-v19'
  );
  return config;
};
