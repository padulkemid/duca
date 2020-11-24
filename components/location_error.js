// @material-ui core
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  shout: {
    fontSize: '3rem',
  },
  error: {
    fontSize: '1.2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(6),
    borderRadius: '8px',
  },
  image: {
    boxShadow: '2px 2px 6px black',
    borderRadius: '8px',
    display: 'block',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  loading: {
    marginTop: theme.spacing(2),
  },
}));

export default function LocationError() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid container spacing={2} direction="column">
        <Grid item xs>
          <Typography variant="h2" className={classes.shout}>
            Oh shoot!
          </Typography>
          <LinearProgress
            color={theme.palette.type === 'dark' ? 'secondary' : 'primary'}
            className={classes.loading}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="h5" className={classes.error} gutterBottom>
            It seems the location is not allowed, please enable to retrieve your
            position and then reload this page.
          </Typography>
          <Typography variant="h5" className={classes.error} gutterBottom>
            If you want to search another city, you could go to the search bar
            above, type the city then boom. It will appear in seconds!
          </Typography>
        </Grid>
        <Grid item xs>
          <img
            src="enable_location.png"
            alt="Location Error"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
