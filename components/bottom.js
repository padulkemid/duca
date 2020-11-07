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

function getForecastsInfo() {
  const data = [
    {
      id: 1,
      imgSrc: '/weather/storm.png',
      imgAlt: 'Thunderstorm',
      condition: 'Thunderstorm',
      temp: '26.92°C',
      date: 'Sunday, 8 November',
    },
    {
      id: 2,
      imgSrc: '/weather/cloudy-1.png',
      imgAlt: 'Clouds',
      condition: 'Broken Clouds',
      temp: '32.02°C',
      date: 'Monday, 9 November',
    },
    {
      id: 3,
      imgSrc: '/weather/rain-2.png',
      imgAlt: 'Rain',
      condition: 'Light Rain',
      temp: '33.83°C',
      date: 'Tuesday, 10 November',
    },
    {
      id: 4,
      imgSrc: '/weather/sun.png',
      imgAlt: 'Sunny',
      condition: 'Clear Sky',
      temp: '34.02°C',
      date: 'Wednesday, 11 November',
    },
  ];

  return data;
}

function getNearbyCircleAreas() {
  const data = [
    {
      id: 1,
      imgSrc: '/weather/storm.png',
      imgAlt: 'Thunderstorm',
      condition: 'Thunderstorm',
      city: 'Jakarta',
      temp: '26.92°C',
    },
    {
      id: 2,
      imgSrc: '/weather/cloudy-1.png',
      imgAlt: 'Clouds',
      condition: 'Broken Clouds',
      city: 'Tangerang',
      temp: '32.02°C',
    },
    {
      id: 3,
      imgSrc: '/weather/rain-2.png',
      imgAlt: 'Rain',
      condition: 'Light Rain',
      city: 'Depok',
      temp: '33.83°C',
    },
    {
      id: 4,
      imgSrc: '/weather/sun.png',
      imgAlt: 'Sunny',
      condition: 'Clear Sky',
      city: 'Sukabumi',
      temp: '34.02°C',
    },
  ];

  return data;
}

export default function Bottom() {
  const classes = useStyles();
  const forecasts = getForecastsInfo();
  const nearbyCircleAreas = getNearbyCircleAreas();

  return (
    <>
      <TitleBar text="Forecasts" />
      <Grid container spacing={2} className={classes.grid}>
        {forecasts.map(({ id, ...info }) => (
          <Grid item key={id} xs={12} md>
            <Forecasts {...info} />
          </Grid>
        ))}
      </Grid>
      <TitleBar text="Nearby Circle Area" />
      <Grid container spacing={2} className={classes.grid}>
        {nearbyCircleAreas.map(({ id, ...info }) => (
          <Grid item key={id} xs={12} md={6} lg>
            <NearbyCircleArea {...info} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
