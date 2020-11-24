// @material-ui core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

// local helpers
import { convertDate } from '../../utils/general_helper';
import { translateWeatherCodesImage } from '../../utils/api_helper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    borderRadius: '8px',
  },
  grid: {
    paddingTop: theme.spacing(2),
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: '50%',
  },
  condition: {
    fontSize: '1rem',
  },
}));

export default function Forecasts({ code, condition, temp, date }) {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item xs>
          {translateWeatherCodesImage(code, classes)}
        </Grid>
        <Grid item xs>
          <Typography variant="h5" className={classes.condition}>
            {condition}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="h5">{`${temp}°C`}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="overline">
            {convertDate(date).split(',')[3]}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

Forecasts.propTypes = {
  code: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
