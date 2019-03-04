const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './tmp/schematics/ng-add/index.js',
  output: {
    path: path.resolve(__dirname, '../../dist/schematics/ng-add'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['schematics-utilities', 'npm-registry-client']
    })
  ],
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: './src/schematics/src/collection.json',
          to: '../collection.json',
          toType: 'file'
        }
      ],
      {}
    )
  ]
};
