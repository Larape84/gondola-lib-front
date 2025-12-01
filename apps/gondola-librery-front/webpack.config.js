const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        // Copia assets de la app
        {
          from: path.resolve(__dirname, '../gondola-librery-front/src/assets'),
          to: 'assets',
        },

        // Copia PrimeNG v17 completo
        {
          from: path.resolve(
            __dirname,
            '../../node_modules/primeng-v17/resources'
          ),
          to: 'assets/ui-styles/primeng-v17/resources',
        },

        // Copia PrimeNG v19 completo
        {
          from: path.resolve(
            __dirname,
            '../../node_modules/primeng-v19/resources'
          ),
          to: 'assets/ui-styles/primeng-v19/resources',
        },

        // Copia PrimeNG v20 completo
        {
          from: path.resolve(__dirname, '../../node_modules/primeng/resources'),
          to: 'assets/ui-styles/primeng-v20/resources',
        },

        // Copia primeicons
        {
          from: path.resolve(__dirname, '../../node_modules/primeicons'),
          to: 'assets/ui-styles/primeicons',
        },
      ],
    })
  );

  return config;
};
