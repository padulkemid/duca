import { createMuiTheme } from '@material-ui/core/styles';
import fonts from './fonts';

const theme = createMuiTheme({
  typography: {
    ...fonts,
  },
  palette: {
    type: 'dark',
  },
});

export default theme;
