// @material-ui core
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// local helpers
import { Emoji } from '../../utils/general_helper';

export default function LocationInfo() {
  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Grid item xs>
        <Typography variant="h2">Bogor</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">Saturday, 7 November</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h4">
          Raining
          <Emoji symbol="🌧️" label="Raining" />
        </Typography>
      </Grid>
    </Grid>
  );
}
