// @material-ui core
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    borderRadius: '8px',
  },
  image: {
    display: 'block',
    margin: '0 auto',
    width: '50%',
  },
  loading: {
    display: 'block',
    margin: '0 auto',
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  },
}));

export default function MainCondition({ imgSrc, imgAlt, infoName, infoValue }) {
  const classes = useStyles();

  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs>
          <img src={imgSrc} alt={imgAlt} className={classes.image} />
        </Grid>
        <Grid item xs>
          <Typography variant="overline" gutterBottom>
            {infoName}
          </Typography>
          {infoValue.includes('undefined') ? (
            <CircularProgress size="2rem" className={classes.loading} />
          ) : (
            <Typography variant="h5">{infoValue}</Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

MainCondition.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  infoName: PropTypes.string.isRequired,
  infoValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
