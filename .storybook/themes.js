import { create } from '@storybook/theming';

const defaultThemeParams = {
  colorPrimary: '#338fff',

  // Typography
  fontBase: 'Inter,sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol!important',
  fontCode: 'monospace',

  appBorderRadius: 4,
  inputBorderRadius: 4,

  brandTitle: 'Logseq Storybook',
  brandUrl: 'https://logseq.com/',
  // brandImage: 'https://asset.logseq.com/static/img/logo.png',
  brandTarget: '_self',
}

export const Light = create({
  base: 'light',

  // colorSecondary: 'deepskyblue',

  // UI
  appBg: '#f7f7f7',
  appContentBg: '#ffffff',
  appBorderColor: '#ccc',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',

  ...defaultThemeParams
});

export const Dark = create({
  base: 'dark',

  colorSecondary: '#8ec2c2',

  // UI
  appBg: '#023643',
  appContentBg: '#002b36',
  appBorderColor: '#0e5263',

  // Text colors
  textColor: '#dfdfdf',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: '#8ec2c2',
  barSelectedColor: '#8ec2c2',
  barBg: '#023643',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',

  ...defaultThemeParams
});
