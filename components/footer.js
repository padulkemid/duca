// @material-ui core
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

// local helpers
import { Emoji } from '../utils/general_helper';

const useStyles = makeStyles((theme) => ({
  box: {
    paddingTop: theme.spacing(5),
  },
  padulkemid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: '1.2rem',
  },
  link: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography variant="h5" className={classes.padulkemid} gutterBottom>
            Dukun Cuaca
            <Emoji symbol="🌤️" label="Sun" />
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
            variant="h5"
            align="right"
            className={classes.padulkemid}
            gutterBottom>
            + padulkemid - &copy;
            {` ${new Date().getFullYear()}`}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" align="right">
        thank you very much for coming here! visit my blog to read some
        {'\n'}
        <a
          href="https://padulkem.id"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}>
          stories
        </a>
        !
      </Typography>
      <Typography variant="body2" align="right">
        you could find the source code right
        {'\n'}
        <a
          href="https://github.com/padulkemid/duca"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}>
          here
        </a>
        !
      </Typography>
      <Typography variant="body2" align="right">
        icons were made by
        {'\n'}
        <a
          href="https://www.flaticon.com/authors/linector"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}>
          linector
        </a>
        {'\n'}
        from
        {'\n'}
        <a
          href="https://www.flaticon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}>
          flaticon
        </a>
        .
      </Typography>
    </Box>
  );
}
