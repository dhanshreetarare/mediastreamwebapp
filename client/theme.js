import { createMuiTheme } from '@material-ui/core/styles'
import { blue, brown } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        light: '#f05545',
        main: '#b71c1c',
        dark: '#7f0000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#fbfffc',
        main: '#c8e6c9',
        dark: '#97b498',
        contrastText: '#37474f',
      },
        openTitle: blue['300'],
        protectedTitle: brown['300'],
        type: 'light'
      },
    })

  export default theme