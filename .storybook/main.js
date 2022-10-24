
module.exports = {
  stories: [{
    directory: '../src/stories/',
    titlePrefix: 'Components',
    files: '*.*',
  }],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ],
  framework: "@storybook/react",
  core: {
    disableTelemetry: true
  }
}
