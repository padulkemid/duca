import { createMuiTheme } from '@material-ui/core/styles';
import fonts from './fonts';

const theme = createMuiTheme({
  typography: {
    ...fonts,
  },
  palette: {
    type: 'light',
  },
});

export default theme;
