// @material-ui core
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

// local components
import LocationInfo from './weather/location_info';
import WeatherCondition from './weather/weather_condition';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(6),
    borderRadius: '8px',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4),
    },
  },
  loading: {
    display: 'block',
    margin: '0 auto',
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  },
}));

export default function Header({ weather }) {
  const classes = useStyles();

  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid container spacing={5} justify="center" alignItems="center">
        {weather ? (
          <>
            <Grid item xs>
              <LocationInfo {...weather} />
            </Grid>
            <Grid item xs>
              <WeatherCondition {...weather} />
            </Grid>
          </>
        ) : (
          <Grid item xs>
            <CircularProgress size="2rem" className={classes.loading} />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

Header.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};
