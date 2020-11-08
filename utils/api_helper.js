// local helpers
import { Emoji } from './general_helper';

function isDayTime() {
  const hours = new Date().getHours();
  if (hours > 6 && hours < 19) return true;
  return false;
}

export async function dataFetcher(url) {
  const fetchData = await fetch(url);
  const data = await fetchData.json();

  return data;
}

export function translateWeatherCodesEmoji(code) {
  const stringed = String(code);

  if (stringed === '800') {
    return (
      <>
        Clear Sky
        <Emoji symbol="☀️" label="Clear Sky" />
      </>
    );
  }

  switch (stringed[0]) {
    case '2':
      return (
        <>
          Thunderstorm
          <Emoji symbol="⛈️" label="Thunderstorm" />
        </>
      );
    case '3':
      return (
        <>
          Drizzle
          <Emoji symbol="🌦️" label="Drizzle" />
        </>
      );
    case '5':
      return (
        <>
          Raining
          <Emoji symbol="🌧️" label="Raining" />
        </>
      );
    default:
      break;
  }

  return (
    <>
      Clouds
      <Emoji symbol="☁️" label="Clouds" />
    </>
  );
}

export function translateWeatherCodesImage(code, classes) {
  const stringed = String(code);
  const dayTime = isDayTime();

  if (stringed === '800') {
    return (
      <img src="/weather/sun.png" alt="Clear Sky" className={classes.image} />
    );
  }

  switch (stringed[0]) {
    case '2':
      return (
        <img
          src="/weather/storm.png"
          alt="Thunderstorm"
          className={classes.image}
        />
      );
    case '3':
      return (
        <img
          src="/weather/rain-1.png"
          alt="Drizzle"
          className={classes.image}
        />
      );
    case '5':
      return (
        <img src="/weather/rain.png" alt="Raining" className={classes.image} />
      );
    default:
      break;
  }

  return (
    <img
      src={dayTime ? '/weather/cloudy-1.png' : '/weather/night-1.png'}
      alt="Clouds"
      className={classes.image}
    />
  );
}
