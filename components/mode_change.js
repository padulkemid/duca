// react
import { useEffect, useState } from 'react';

// @material-ui core
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui icons
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

// prop-types
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  adjustLocation: {
    width: '100%',
    alignItems: 'flex-end',
  },
  adjustLabel: {
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
    <FormGroup className={classes.adjustLocation}>
      <FormControlLabel
        control={
          <Switch checked={darkMode} onChange={handleChange} name="darkMode" />
        }
        label={darkMode ? <Brightness3Icon /> : <Brightness5Icon />}
        className={classes.adjustLabel}
        labelPlacement="end"
      />
    </FormGroup>
  );
}

ModeChange.propTypes = {
  changeMode: PropTypes.func.isRequired,
};
