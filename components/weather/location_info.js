// @material-ui core
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

// local helpers
import { convertDate } from '../../utils/general_helper';
import { translateWeatherCodesEmoji } from '../../utils/api_helper';

const useStyles = makeStyles({
  city: {
    fontSize: '3rem',
  },
  date: {
    fontSize: '0.9rem',
  },
  condition: {
    fontSize: '1.8rem',
  },
});

export default function LocationInfo({ city, date, condition }) {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Grid item xs>
        <Typography variant="h2" className={classes.city}>
          {city}
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="overline" className={classes.date}>
          {convertDate(date)}
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h5" className={classes.condition}>
          {translateWeatherCodesEmoji(condition)}
        </Typography>
      </Grid>
    </Grid>
  );
}

LocationInfo.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  condition: PropTypes.number.isRequired,
};
