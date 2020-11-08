// react
import { useEffect, useState } from 'react';

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

// local libraries
import { getWeatherInfo } from '../lib/weather';

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

export default function Header({ city }) {
  const classes = useStyles();
  const [data, setData] = useState(false);

  useEffect(async () => {
    if (city && city.length) {
      const newData = await getWeatherInfo('city', city);
      setData(newData);
    }

    if (!city) {
      const newData = await getWeatherInfo('geo');
      setData(newData);
    }
  }, []);

  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid container spacing={5} justify="center" alignItems="center">
        {data ? (
          <>
            <Grid item xs>
              <LocationInfo {...data} />
            </Grid>
            <Grid item xs>
              <WeatherCondition {...data} />
            </Grid>
          </>
        ) : (
          <Grid item xs>
            <CircularProgress size="2rem" />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

Header.defaultProps = {
  city: '',
};

Header.propTypes = {
  city: PropTypes.string,
};
