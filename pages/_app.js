// react
import { useEffect, useState } from 'react';

// next
import Head from 'next/head';

// @material-ui core
import { ThemeProvider } from '@material-ui/core/styles';

// prop-types
import PropTypes from 'prop-types';

// locals
import { lightMode, darkMode } from '../styles/themes';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState(true);
  const selectedMode = mode ? lightMode : darkMode;

  useEffect(() => {
    // remove the server-side injected CSS. ( from material-ui )
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);

    // check local storage for theme mode
    const getMode = localStorage.getItem('mode');
    if (getMode === 'light') {
      setMode(true);
    } else {
      setMode(false);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={selectedMode}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
