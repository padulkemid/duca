// @material-ui core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item xs>
          <LocationInfo />
        </Grid>
        <Grid item xs>
          <WeatherCondition />
        </Grid>
      </Grid>
    </Paper>
  );
}
