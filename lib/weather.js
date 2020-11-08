// local libraries
import { OMW_WEATHER, OMW_FORECAST, OMW_NEARBY_CIRCLE_AREA } from './links';

// local helpers
import { dataFetcher } from '../utils/api_helper';

const { NEXT_PUBLIC_OMW_API_KEY } = process.env;

function defineDataStruct(data) {
  const { name: city, wind, weather, main } = data;
  const { speed: windSpeed } = wind;
  const { temp, feels_like: feelsLike, humidity } = main;
  const code = weather[0].id;
  const condition = weather[0].main;

  const struct = {
    date: new Date(),
    city,
    code,
    temp,
    feelsLike,
    humidity,
    windSpeed,
    condition,
  };

  return struct;
}

function defineForecastStruct(data) {
  const { list } = data;
  const struct = [];

  for (let i = 0; i < list.length; i += 1) {
    const { main, weather, dt_txt: date } = list[i];
    const { temp } = main;
    const weatherData = weather[0];
    const build = {
      temp,
      weatherData,
      date,
    };

    struct.push(build);
  }

  return struct;
}

function defineNearbyCircleAreaStruct(data) {
  const { list } = data;
  const struct = [];

  for (let i = 0; i < list.length; i += 1) {
    const build = defineDataStruct(list[i]);

    struct.push(build);
  }

  return struct;
}

async function fetchByCity(city, url) {
  if (url === OMW_WEATHER) {
    const queries = `q=${city}&units=metric&appid=${NEXT_PUBLIC_OMW_API_KEY}`;
    const info = await dataFetcher(`${url}${queries}`);

    return info;
  }

  if (url === OMW_FORECAST) {
    const queries = `q=${city}&units=metric&cnt=4&appid=${NEXT_PUBLIC_OMW_API_KEY}`;
    const info = await dataFetcher(`${url}${queries}`);

    return info;
  }

  return false;
}

async function fetchByGeo(url) {
  const pos = await new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  if (url === OMW_WEATHER) {
    const queries = `lat=${lat}&lon=${lon}&units=metric&appid=${NEXT_PUBLIC_OMW_API_KEY}`;
    const info = await dataFetcher(`${url}${queries}`);

    return info;
  }

  if (url === OMW_FORECAST || url === OMW_NEARBY_CIRCLE_AREA) {
    const queries = `lat=${lat}&lon=${lon}&units=metric&cnt=4&appid=${NEXT_PUBLIC_OMW_API_KEY}`;
    const info = await dataFetcher(`${url}${queries}`);

    return info;
  }

  return false;
}

export async function getWeatherInfo(type, city) {
  let info = {};

  if (type === 'city') info = await fetchByCity(city, OMW_WEATHER);

  if (type === 'geo') info = await fetchByGeo(OMW_WEATHER);

  return defineDataStruct(info);
}

export async function getForecastInfo(type, city) {
  let info = {};

  if (type === 'city') info = await fetchByCity(city, OMW_FORECAST);

  if (type === 'geo') info = await fetchByGeo(OMW_FORECAST);

  return defineForecastStruct(info);
}

export async function getNearbyCircleAreaInfo() {
  const info = await fetchByGeo(OMW_NEARBY_CIRCLE_AREA);

  return defineNearbyCircleAreaStruct(info);
}
