// @material-ui core
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    paddingTop: theme.spacing(5),
  },
  padulkemid: {
    paddingTop: theme.spacing(2),
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
      <Typography
        variant="h5"
        align="right"
        className={classes.padulkemid}
        gutterBottom>
        + padulkemid - &copy;
        {` ${new Date().getFullYear()}`}
      </Typography>
      <Typography variant="body2" align="right">
        this webpage is intended for fullstack developer entry test at
        {'\n'}
        <a
          href="https://maxsol.id"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}>
          maxsol
        </a>
        .
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
