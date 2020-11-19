import path from 'path';

function configSVGIcon(config) {
  config.module
    .rule('svg')
    .exclude.add(path.resolve(__dirname, './src/assets/icon'))
    .end();

  const options = {
    plugins: [
      { cleanupAttrs: true },
      { cleanupEnableBackground: true },
      { cleanupIDs: true },
      { cleanupListOfValues: true },
      { cleanupNumericValues: true },
      { collapseGroups: true },
      { convertColors: true },
      { convertPathData: true },
      { convertShapeToPath: true },
      { convertStyleToAttrs: true },
      { convertTransform: true },
      { mergePaths: true },
      { removeComments: true },
      { removeDesc: true },
      { removeDimensions: true },
      { removeDoctype: true },
      { removeEditorsNSData: true },
      { removeEmptyAttrs: true },
      { removeEmptyContainers: true },
      { removeEmptyText: true },
      { removeHiddenElems: true },
      { removeMetadata: true },
      { removeNonInheritableGroupAttrs: true },
      { removeRasterImages: true },
      { removeTitle: true },
      { removeUnknownsAndDefaults: true },
      { removeUselessDefs: true },
      { removeUnusedNS: true },
      { removeUselessStrokeAndFill: true },
      {
        removeAttrs: { attrs: 'fill' },
      },
      { removeXMLProcInst: true },
      { removeStyleElement: true },
      { removeUnknownsAndDefaults: true },
      { sortAttrs: true },
    ],
  };

  config.module
    .rule('svg-icon')
    .test(/\.svg$/)
    .include.add(path.resolve(__dirname, './src/assets/icon'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'i-[name]',
    })
    .end()
    .use('svgo-loader')
    .loader('svgo-loader')
    .options(options)
    .end();
}

module.exports = {
  chainWebpack: (config) => {
    configSVGIcon(config);
  },
};
