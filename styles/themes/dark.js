import { createMuiTheme } from '@material-ui/core/styles';
import typography from './fonts';

const theme = createMuiTheme({
  ...typography,
  palette: {
    type: 'dark',
  },
});

export default theme;
