// react
import { useEffect, useState } from 'react';

// prop-types
import PropTypes from 'prop-types';

// local components
import Layout from '../components/layout';
import SEO from '../components/seo';
import ModeChange from '../components/mode_change';
import Header from '../components/header';
import Middle from '../components/middle';
import Bottom from '../components/bottom';
import Footer from '../components/footer';

// local libraries
import { getWeatherInfo, getForecastInfo } from '../lib/weather';

export default function Home({ changeMode, city }) {
  const [weather, setWeather] = useState(false);
  const [forecasts, setForecasts] = useState(false);

  useEffect(async () => {
    if (city && city.length) {
      const newWeather = await getWeatherInfo('city', city);
      const newForecasts = await getForecastInfo('city', city);

      setWeather(newWeather);
      setForecasts(newForecasts);
    }

    if (!city) {
      const newWeather = await getWeatherInfo('geo');
      const newForecasts = await getForecastInfo('geo');

      setWeather(newWeather);
      setForecasts(newForecasts);
    }
  }, []);

  return (
    <Layout>
      <SEO />
      <ModeChange changeMode={changeMode} />
      <Header data={weather} />
      <Middle data={weather} />
      <Bottom data={forecasts} />
      <Footer />
    </Layout>
  );
}

Home.defaultProps = {
  city: '',
};

Home.propTypes = {
  changeMode: PropTypes.func.isRequired,
  city: PropTypes.string,
};

export async function getServerSideProps(ctx) {
  const { city } = ctx.query;

  return {
    props: {
      ...(city && {
        city,
      }),
    },
  };
}
