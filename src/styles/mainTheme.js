import * as colors from './color'
import * as borders from './border'

const mainTheme = {
  text: {
    primary: colors.orange.medium,
    secondary: colors.blue.medium,
    tertiary: colors.white,
    quadentiary: colors.pink.medium,

    // deprecated
    accent: colors.background,
  },
  window: {
    bar: colors.purple.dark,
    barText: colors.orange.medium,
    barHeight: '35px',
    background: colors.purple.darkTransparent,
    border: borders.windowBorder,
    text: colors.orange.medium,
    link: colors.blue.medium,
  },

  icon: {
    fontSize: '1em',
  },

  // deprecate
  accent: {
    primary: colors.purple.light,
    secondary: colors.purple.medium,
  },
  highlight: colors.yellow.medium,
  background: colors.background,
  fontFamily: 'inconsolata',
}

export default mainTheme
