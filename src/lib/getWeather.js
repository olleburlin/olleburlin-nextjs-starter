// fetch weather from openweathermap.org
// return weather data
export async function getWeather() {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=55.604703&longitude=12.9986346&current=temperature_2m,wind_speed_10m&wind_speed_10m`,
    {
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();
  return data;
}
