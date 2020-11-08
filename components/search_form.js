// @material-ui core
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui icons
import SearchIcon from '@material-ui/icons/Search';

// formik
import { Formik, Form } from 'formik';

// yup
import * as yup from 'yup';

// local helpers
import { TextFieldWithErr } from '../utils/form_helper';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    padding: theme.spacing(1),
  },
}));

export default function SearchForm() {
  const classes = useStyles();

  const initialValues = {
    city: '',
  };

  const validationSchema = yup.object({
    city: yup.string().required('You need to fill this!'),
  });

  const handleSubmit = async (data, { setSubmitting }) => {
    const { city } = data;

    setTimeout(() => {
      setSubmitting(false);
      window.location.href = `/?city=${city}`;
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validationSchema={validationSchema}>
      {({ isSubmitting }) => (
        <Form className={classes.form}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={9}>
              <TextFieldWithErr label="Search by city name" name="city" />
            </Grid>
            <Grid item xs={3}>
              <IconButton type="submit" disabled={isSubmitting}>
                <SearchIcon />
              </IconButton>
              {isSubmitting && <LinearProgress />}
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
