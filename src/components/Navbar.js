import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchWeather from "./SearchWeather";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({
  weatherData,
  setWeatherData,
  searchWeatherData,
  setError,
  error,
  userLocation,
}) => {
  const classes = useStyles();
  return (
    <AppBar position='static' color='primary' className={classes.root}>
      <Toolbar>
        <Typography variant='h4' className={classes.title}>
          Weather App
        </Typography>

        <SearchWeather
          weatherData={weatherData}
          setWeatherData={setWeatherData}
          searchWeatherData={searchWeatherData}
          setError={setError}
          error={error}
          userLocation={userLocation}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
