// @material-ui core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

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

export default function Forecasts({ imgSrc, imgAlt, condition, temp, date }) {
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
          <img src={imgSrc} alt={imgAlt} className={classes.image} />
        </Grid>
        <Grid item xs>
          <Typography variant="h5" className={classes.condition}>
            {condition}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="h5">{temp}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="overline">{date}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

Forecasts.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
