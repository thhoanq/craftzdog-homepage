import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// Tokyo Night Storm palette
// Dark:  bg #1a1b2e · text #c8d3f5 · accent #82aaff · purple #c099ff · muted #636da6
// Light: bg #e1e2ea · text #343b59 · accent #2959aa · purple #7847bd · muted #8990b3

const styles = {
  global: props => ({
    body: {
      bg: mode('#e1e2ea', '#1a1b2e')(props),
      color: mode('#343b59', '#c8d3f5')(props),
      lineHeight: '1.7'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'page-title': {
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: '-0.02em'
      },
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#2959aa',
        _dark: { textDecorationColor: '#82aaff' },
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#2959aa', '#82aaff')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
}

const colors = {
  tokyoBlue: '#82aaff',
  tokyoPurple: '#c099ff'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
