// react
import { useEffect, useState } from 'react';

// prop-types
import PropTypes from 'prop-types';

// local components
import Layout from '../components/layout';
import SEO from '../components/seo';
import ModeChange from '../components/mode_change';
import LocationError from '../components/location_error';
import Header from '../components/header';
import Middle from '../components/middle';
import Bottom from '../components/bottom';
import Footer from '../components/footer';

// local libraries
import {
  getWeatherInfo,
  getForecastInfo,
  getNearbyCircleAreaInfo,
} from '../lib/weather';

export default function Home({ changeMode, city }) {
  const [weather, setWeather] = useState(false);
  const [forecasts, setForecasts] = useState(false);
  const [nearbyCircleAreas, setNearbyCircleAreas] = useState(false);

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

    // nearby circle can only be used with geolocation
    const newNearbyCircleAreas = await getNearbyCircleAreaInfo();
    setNearbyCircleAreas(newNearbyCircleAreas);
  }, []);

  return (
    <Layout>
      <SEO />
      <ModeChange changeMode={changeMode} />
      {/*
        this is a redundant code, well actually why I write this in double bang..
        of course, I need the bool value without writing the full complete (city && city.length)..
        its the same but its really bad to use, I'm sorry..

        it works without it, its just a minor cleanup because the location error still spawns for a
        milliseconds.
      */}
      {weather || !!city ? (
        <>
          <Header weather={weather} />
          <Middle weather={weather} />
        </>
      ) : (
        <LocationError />
      )}
      <Bottom forecasts={forecasts} nearbyCircleAreas={nearbyCircleAreas} />
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
