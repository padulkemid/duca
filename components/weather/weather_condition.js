// @material-ui core
import { makeStyles } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

// local helpers
import { translateWeatherCodesImage } from '../../utils/api_helper';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'block',
    margin: '0 auto',
    width: '60%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

export default function Weathercode({ code }) {
  const classes = useStyles();
  return translateWeatherCodesImage(code, classes);
}

Weathercode.propTypes = {
  code: PropTypes.number.isRequired,
};
