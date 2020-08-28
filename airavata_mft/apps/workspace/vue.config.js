const BundleTracker = require("webpack-bundle-tracker");
const path = require("path");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "development"
      ? "http://localhost:9001/static/airavata_mft_workspace/dist/"
      : "/static/airavata_mft_workspace/dist/",
  outputDir: "./static/airavata_mft_workspace/dist",
  productionSourceMap: false,
  pages: {
      'storage': './static/airavata_mft_workspace/js/entry-view-storage',
      'transfers': './static/airavata_mft_workspace/js/entry-view-transfers',
      'filetransfer':'./static/airavata_mft_workspace/js/entry-view-filetransfer',
      'newunit':'./static/airavata_mft_workspace/js/entry-new-storage',
      
  },
  configureWebpack: {
    plugins: [
      new BundleTracker({
        filename: "webpack-stats.json",
        path: "./static/airavata_mft_workspace/dist/"
      })
    ],
  },
  chainWebpack: config => {
    /*
     * Specify the eslint config file otherwise it complains of a missing
     * config file for the ../api and ../../static/common packages
     *
     * See: https://github.com/vuejs/vue-cli/issues/2539#issuecomment-422295246
     */
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .tap(options => {
        options.configFile = path.resolve(__dirname, "package.json");
        return options;
      });
  },
  devServer: {
    port: 9001,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: true,
    hotOnly: true
  }
};