import React, { useState } from "react";
import { countryList } from "../countryList";
import {
  Button,
  Grid,
  TextField,
  Select,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ToggleTemp from "./ToogleTemp";

const useStyles = makeStyles((theme) => ({
  inputs: {
    background: "#ddd",
    borderRadius: "5px",
  },
  selected: {
    color: "#aaa",
  },
}));

const SearchWeather = ({
  weatherData,
  setWeatherData,
  searchWeatherData,
  error,
  setError,
}) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = useState({
    inputCity: "",
    inputCountryCode: "",
  });
  const { inputCity, inputCountryCode } = searchInput;

  const handleChange = (e) => {
    setSearchInput({
      ...searchInput,
      [e.target.name]: e.target.value,
    });
  };

  const [temp, setTemp] = useState({
    celsius: true,
    fahr: false,
  });

  const { celsius, fahr } = temp;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCountryCode.trim() === "" || inputCity.trim() === "") {
      setError("Debes Llenar los campos");
    } else {
      searchWeatherData(inputCity, inputCountryCode);
    }
  };

  const handleCelsius = () => {};

  const handleFahr = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container direction={"row"} spacing={1}>
          <Grid item>
            <Select
              native
              name='inputCountryCode'
              onChange={handleChange}
              value={inputCountryCode}
              variant='standard'
              id='country'
              className={classes.inputs}
            >
              {countryList.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </Select>
          </Grid>
          <Grid item>
            <TextField
              name='inputCity'
              id='city'
              active='true'
              variant='standard'
              palceholder='Ciudad'
              onChange={handleChange}
              className={classes.inputs}
            />
          </Grid>
          <Grid item>
            <ToggleTemp />
          </Grid>
          <Grid item>
            <Button
              type='submit'
              value='Buscar'
              variant='contained'
              color='secondary'
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SearchWeather;
