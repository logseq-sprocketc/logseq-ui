module.exports = {
  stories: [{
    directory: '../src/stories/',
    titlePrefix: 'Logseq Components',
    files: '*.*',
  }],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    disableTelemetry: true
  }
}
