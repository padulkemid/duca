// @material-ui core
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

// local components
import MainCondition from './weather/main_condition';

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: theme.spacing(3),
  },
  loading: {
    display: 'block',
    margin: '0 auto',
  },
}));

function getMainConditionInfo({ temp, feelsLike, humidity, windSpeed }) {
  const data = [
    {
      id: 1,
      imgSrc: temp < 31 ? '/weather/winter.png' : '/weather/summer.png',
      imgAlt: 'Temperature Condition Degree',
      infoName: 'Temperature',
      infoValue: `${temp}°C`,
    },
    {
      id: 2,
      imgSrc: feelsLike < 31 ? '/weather/winter.png' : '/weather/summer.png',
      imgAlt: 'Temperature Feels Like Degree',
      infoName: 'Feels Like',
      infoValue: `${feelsLike}°C`,
    },
    {
      id: 3,
      imgSrc: '/weather/cloud.png',
      imgAlt: 'Humidity Percentage',
      infoName: 'Humidity',
      infoValue: `${humidity}%`,
    },
    {
      id: 4,
      imgSrc: '/weather/tornado.png',
      imgAlt: 'Wind Speed in Meter per Second',
      infoName: 'Wind',
      infoValue: `${windSpeed} m/s`,
    },
  ];

  return data;
}

export default function Middle({ weather }) {
  const classes = useStyles();
  const infos = getMainConditionInfo(weather);

  return (
    <Grid container spacing={2} className={classes.grid}>
      {infos.map(({ id, ...info }) => (
        <Grid item key={id} xs={12} md={6} lg>
          <MainCondition {...info} />
        </Grid>
      ))}
    </Grid>
  );
}

Middle.propTypes = {
  weather: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};
