'use strict';

require('babel-register');

var colors = require('colors');
var debug = require('debug')('dev');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./dev.config');

var compiler = webpack(config.webpack);
var devServer = new WebpackDevServer(compiler, config.server.options);

devServer.listen(config.server.port, '0.0.0.0', function () {
  debug('webpack-dev-server listening on port %s', config.server.port);
});

console.log('server available at:'.underline.yellow);
console.log(`http://localhost:${config.server.port}/app/#/article/0`.underline.yellow);
