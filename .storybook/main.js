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
    'storybook-dark-mode'
  ],
  framework: "@storybook/react",
  core: {
    disableTelemetry: true
  }
}
