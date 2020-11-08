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
  const [mode, setMode] = useState(false);
  const selectedMode = mode ? darkMode : lightMode;

  const changeMode = () => {
    const getMode = localStorage.getItem('darkMode');
    const parsedMode = JSON.parse(getMode);
    localStorage.setItem('darkMode', !parsedMode);
    setMode(!parsedMode);
  };

  useEffect(() => {
    // remove the server-side injected CSS. ( from material-ui )
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  // store mode on localStorage
  useEffect(() => {
    const getMode = localStorage.getItem('darkMode');
    setMode(JSON.parse(getMode));
  }, []);

  // pass mode to children
  const modeAndPageProps = {
    ...pageProps,
    changeMode,
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={selectedMode}>
        <Component {...modeAndPageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
