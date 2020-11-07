// @material-ui core
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: theme.spacing(2),
  },
  title: {
    fontSize: '1.8rem',
  },
}));

export default function TitleBar({ text }) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      className={classes.grid}
      justify="center"
      alignItems="center">
      <Grid item xs>
        <Divider />
      </Grid>
      <Grid item xs>
        <Typography align="center" variant="h5" className={classes.title}>
          {text}
        </Typography>
      </Grid>
      <Grid item xs>
        <Divider />
      </Grid>
    </Grid>
  );
}

TitleBar.propTypes = {
  text: PropTypes.string.isRequired,
};
