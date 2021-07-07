module.exports = (config) => {
  config.module.rules.push({
    test: /\.worker\.js$/,
    loader: 'worker-loader',
    options: {
      filename: '[name].[contenthash].worker.js',
    },
  });

  return config;
};
