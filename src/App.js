import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import { Container, Grid } from "@material-ui/core";
import CurrentWeather from "./components/CurrentWeather";
import DailyForecast from "./components/DailyForecast";
import Error from "./layout/Error";
import Spinner from "./layout/Spinner";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    currentWeather: null,
    forecastWeather: null,
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [userLocation, setUserLocation] = useState({
    lat: null,
    lon: null,
    city: "",
    countryName: "",
    countryCode: "",
  });

  const { currentWeather, forecastWeather } = weatherData;
  const { city, countryCode } = userLocation;

  // Fetch Current Weather data from API, then use data to do a 2nd fetch
  const searchWeatherData = useCallback(async (cityName, country) => {
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric&lang=es`;
      const res = await fetch(url);
      setError(res.ok ? null : res.statusText);
      if (res.ok) {
        const data = await res.json();

        const res2 = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric&lang=es`
        );
        const data2 = await res2.json();
        setLoading(false);
        setWeatherData((prevWeather) => ({
          ...prevWeather,
          currentWeather: data,
          forecastWeather: data2,
        }));
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }, []);

  // Get location info from user
  useEffect(() => {
    const getUserLocation = async () => {
      const url = `https://geolocation-db.com/json/${process.env.REACT_APP_GEOLOCATION_DB_API}`;
      const res = await fetch(url);
      const data = await res.json();

      setUserLocation((prevLocation) => ({
        ...prevLocation,
        countryName: data.country_name,
        countryCode: data.country_code,
        city: data.city,
        lat: data.latitude,
        lon: data.longitude,
      }));
    };
    getUserLocation();
  }, []);

  useEffect(() => {
    if (city.length > 0) {
      searchWeatherData(city, countryCode);
    }
  }, [city, countryCode, searchWeatherData]);

  return (
    <div>
      <Navbar
        userLocation={userLocation}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        searchWeatherData={searchWeatherData}
        setError={setError}
        error={error}
      />
      {loading ? (
        <Spinner />
      ) : (
        <Container style={{ marginTop: "2rem" }}>
          {error && <Error msg={error} />}

          {currentWeather !== null && (
            <Location
              currentWeather
              userCity={currentWeather.name}
              userCountry={currentWeather.sys.country}
            />
          )}

          <Grid container direction='row' spacing={6}>
            <Grid item xs={6}>
              {currentWeather !== null && (
                <CurrentWeather currentWeather={currentWeather} />
              )}
            </Grid>
            <Grid container item xs={6} justify='center' direction='column'>
              {forecastWeather !== null && (
                <DailyForecast forecastWeather={forecastWeather} />
              )}
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default App;
