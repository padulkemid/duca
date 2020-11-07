// react
import { useEffect, useState } from 'react';

// @material-ui core
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui icons
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

// prop-types
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  adjustLabel: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default function ModeChange({ changeMode }) {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  function handleChange() {
    setDarkMode(!darkMode);
    changeMode();
  }

  useEffect(() => {
    const getMode = localStorage.getItem('darkMode');
    const parsedMode = JSON.parse(getMode);

    setDarkMode(parsedMode);
  }, []);

  return (
    <FormControlLabel
      control={
        <Switch checked={darkMode} onChange={handleChange} name="darkMode" />
      }
      label={darkMode ? <Brightness3Icon /> : <Brightness5Icon />}
      className={classes.adjustLabel}
      labelPlacement="end"
    />
  );
}

ModeChange.propTypes = {
  changeMode: PropTypes.func.isRequired,
};
