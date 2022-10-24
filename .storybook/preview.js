import { Dark, Light} from './themes'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
    dark: Dark,
    light: Light,
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true
  }
}
