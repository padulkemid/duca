// @material-ui core
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// local helpers
import { Emoji } from '../../utils/general_helper';

const useStyles = makeStyles({
  date: {
    fontSize: '0.9rem',
  },
  condition: {
    fontSize: '1.8rem',
  },
});

export default function LocationInfo() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Grid item xs>
        <Typography variant="h2">Bogor</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="overline" className={classes.date}>
          Saturday, 7 November
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h5" className={classes.condition}>
          Raining
          <Emoji symbol="🌧️" label="Raining" />
        </Typography>
      </Grid>
    </Grid>
  );
}
