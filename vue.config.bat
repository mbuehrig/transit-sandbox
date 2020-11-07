// eslint-disable-next-line @typescript-eslint/no-var-requires
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
        ],
      }),
    ],
  },
};
