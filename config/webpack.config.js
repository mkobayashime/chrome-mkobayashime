'use strict';

const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    tweetdeck: PATHS.src + '/tweetdeck.js',
    dAnime: PATHS.src + '/dAnime.js',
    manaba: PATHS.src + '/manaba.js',
    tulips: PATHS.src + '/tulips.js',
    background: PATHS.src + '/background.js',
  },
});

module.exports = config;
