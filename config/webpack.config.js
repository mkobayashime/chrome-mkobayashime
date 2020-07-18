"use strict"

const merge = require("webpack-merge")

const common = require("./webpack.common.js")
const PATHS = require("./paths")

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    quickTazugane: PATHS.src + "/quickTazugane.js",
    tweetdeck: PATHS.src + "/tweetdeck.js",
    dAnime: PATHS.src + "/dAnime.js",
    manaba: PATHS.src + "/manaba.js",
    tulips: PATHS.src + "/tulips.js",
    onsen: PATHS.src + "/onsen.js",
    twins: PATHS.src + "/twins.js",
    musasi: PATHS.src + "/musasi.js",
    disableForceDownload: PATHS.src + "/disableForceDownload.js",
  },
})

module.exports = config
