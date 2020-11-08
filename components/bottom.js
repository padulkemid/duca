// @material-ui core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

// local components
import TitleBar from './title_bar';
import Forecasts from './weather/forecasts';
import NearbyCircleArea from './weather/nearby_circle_area';

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: theme.spacing(2),
  },
}));

function getForecastsInfo(data) {
  const struct = [];

  for (let i = 0; i < data.length; i += 1) {
    const { temp, weatherData, date } = data[i];
    const { id: code, main: condition } = weatherData;
    const build = {
      id: i,
      code,
      condition,
      temp,
      date,
    };

    struct.push(build);
  }

  return struct;
}

function getNearbyCircleAreasInfo(data) {
  const struct = [];

  for (let i = 0; i < data.length; i += 1) {
    const { code, city, condition, temp } = data[i];
    const build = {
      id: i,
      code,
      condition,
      temp,
      // TODO: think! contains city more than 2 words might be just pick the first letter :p
      city: city.split(' ')[0],
    };

    struct.push(build);
  }

  return struct;
}

export default function Bottom({ forecasts, nearbyCircleAreas }) {
  const classes = useStyles();
  const forecastsInfo = getForecastsInfo(forecasts);
  const nearbyCircleAreasInfo = getNearbyCircleAreasInfo(nearbyCircleAreas);

  return (
    <>
      {forecasts && <TitleBar text="Forecasts" />}
      <Grid container spacing={2} className={classes.grid}>
        {forecastsInfo.map(({ id, ...info }) => (
          <Grid item key={id} xs={12} md>
            <Forecasts {...info} />
          </Grid>
        ))}
      </Grid>
      {nearbyCircleAreas && <TitleBar text="Nearby Circle Area From You" />}
      <Grid container spacing={2} className={classes.grid}>
        {nearbyCircleAreasInfo.map(({ id, ...info }) => (
          <Grid item key={id} xs={12} md={6} lg>
            <NearbyCircleArea {...info} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Bottom.propTypes = {
  forecasts: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
  nearbyCircleAreas: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
    .isRequired,
};
