// @material-ui core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// clsx
import clsx from 'clsx';

// prop-types
import PropTypes from 'prop-types';

// local helpers
import { translateWeatherCodesImage } from '../../utils/api_helper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    borderRadius: '8px',
  },
  grid: {
    paddingTop: theme.spacing(2),
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: '60%',
  },
  condition: {
    fontSize: '1.5rem',
  },
  temp: {
    fontSize: '1.2rem',
  },
  city: {
    fontSize: '1.8rem',
  },
  centered: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
    },
  },
}));

export default function NearbyCircleArea({ code, city, condition, temp }) {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid
        container
        spacing={3}
        className={classes.grid}
        justify="center"
        alignItems="center">
        <Grid item xs={12} sm lg={12}>
          {translateWeatherCodesImage(code, classes)}
        </Grid>
        <Grid item xs={12} sm lg={12}>
          <Typography
            variant="h2"
            gutterBottom
            className={clsx(classes.city, classes.centered)}>
            {city}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            className={clsx(classes.condition, classes.centered)}>
            {condition}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            className={clsx(classes.temp, classes.centered)}>
            {`${temp}°C`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

NearbyCircleArea.propTypes = {
  code: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
