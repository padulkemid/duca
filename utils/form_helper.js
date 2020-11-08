// @material-ui core
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/core/styles';

// formik
import { useField } from 'formik';

// prop-types
import PropTypes from 'prop-types';

export function TextFieldWithErr({ label, ...props }) {
  const theme = useTheme();
  const [field, meta] = useField(props);
  const { error, touched, value } = meta;
  const errorText = error && touched ? error : '';

  return (
    <TextField
      {...field}
      variant="outlined"
      margin="dense"
      color={theme.palette.type === 'dark' ? 'secondary' : 'primary'}
      label={label}
      value={value}
      helperText={errorText}
      error={!!errorText}
      fullWidth
    />
  );
}

TextFieldWithErr.propTypes = {
  label: PropTypes.string.isRequired,
};
