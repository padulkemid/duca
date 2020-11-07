import { createMuiTheme } from '@material-ui/core/styles';
import fonts from './fonts';
import overrideConfig from './overrides';

const theme = createMuiTheme({
  typography: {
    ...fonts,
  },
  overrides: {
    ...overrideConfig,
  },
  palette: {
    type: 'dark',
  },
});

export default theme;
