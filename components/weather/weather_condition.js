// @material-ui core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'block',
    margin: '0 auto',
    width: '60%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));
export default function WeatherCondition() {
  const classes = useStyles();
  return (
    <img src="/weather/rain.png" alt="Raining" className={classes.image} />
  );
}
