// @material-ui core
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Header() {
  return (
    <Grid container spacing={2} direction="column" alignItems="flex-start">
      <Grid item xs>
        <Typography variant="h2">Bogor</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">Saturday, 7 November</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h4">Partly Cloudy</Typography>
      </Grid>
    </Grid>
  );
}
