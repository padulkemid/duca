// local libraries
import { OMW_WEATHER, OMW_FORECAST, OMW_NEARBY_CIRCLE_AREA } from './links';

// local helpers
import { dataFetcher } from '../utils/api_helper';

const { NEXT_PUBLIC_OMW_API_KEY } = process.env;

function defineDataStruct(data) {
  const { name: city, wind, weather, main } = data;
  const { speed: windSpeed } = wind;
  const { temp, feels_like: feelsLike, humidity } = main;
  const condition = weather[0].id;

  const struct = {
    date: new Date(),
    city,
    condition,
    temp,
    feelsLike,
    humidity,
    windSpeed,
  };

  return struct;
}

export async function getWeatherInfo(type, city) {
  let queries = '';
  let info = '';

  if (type === 'city') {
    queries = `q=${city}&units=metric&appid=${NEXT_PUBLIC_OMW_API_KEY}`;
    info = await dataFetcher(`${OMW_WEATHER}${queries}`);
  }

  if (type === 'geo') {
    const pos = await new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    queries = `lat=${lat}&lon=${lon}&units=metric&appid=${NEXT_PUBLIC_OMW_API_KEY}`;
    info = await dataFetcher(`${OMW_WEATHER}${queries}`);
  }

  return defineDataStruct(info);
}
