// @material-ui core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
    const { temp, condition, date } = data[i];
    const { id: weatherCode, main: weatherCondition } = condition;
    const build = {
      id: i,
      code: weatherCode,
      condition: weatherCondition,
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
    const { condition: weatherCode, city, weatherCondition, temp } = data[i];
    const build = {
      id: i,
      code: weatherCode,
      condition: weatherCondition,
      temp,
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
      <TitleBar text="Forecasts" />
      <Grid container spacing={2} className={classes.grid}>
        {forecastsInfo.map(({ id, ...info }) => (
          <Grid item key={id} xs={12} md>
            <Forecasts {...info} />
          </Grid>
        ))}
      </Grid>
      <TitleBar text="Nearby Circle Area From You" />
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
