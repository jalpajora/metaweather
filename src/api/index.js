const callMetaWeather = async (query) => {
  const result = await fetch(`https://www.metaweather.com/api/location/${query}`, {
    method: 'GET',
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin':'https://www.metaweather.com  ',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Origin': 'https://www.metaweather.com',
    }
  })
    .then(res => res.json());

  return result;
};

export const fecthLocationList = (text = '') => callMetaWeather(`search/?query=${text}`);

export const fecthLocationInfo = (id = '') => callMetaWeather(id);
