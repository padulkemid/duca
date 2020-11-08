// react
import { useEffect, useState } from 'react';

// @material-ui core
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui icons
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

// prop-types
import PropTypes from 'prop-types';

// local components
import SearchForm from './search_form';

const useStyles = makeStyles({
  adjustLabel: {
    alignItems: 'flex-end',
  },
});

export default function ModeChange({ changeMode }) {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(!darkMode);
    changeMode();
  };

  useEffect(() => {
    const getMode = localStorage.getItem('darkMode');
    const parsedMode = JSON.parse(getMode);

    setDarkMode(parsedMode);
  }, []);

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} md>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={handleChange}
              name="darkMode"
            />
          }
          label={darkMode ? <Brightness3Icon /> : <Brightness5Icon />}
          className={classes.adjustLabel}
        />
      </Grid>
      <Grid item xs={12} md>
        <SearchForm />
      </Grid>
    </Grid>
  );
}

ModeChange.propTypes = {
  changeMode: PropTypes.func.isRequired,
};
