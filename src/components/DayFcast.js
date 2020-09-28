import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";

const DayFcast = ({ temp, weather, time }) => {
  const unixToDate = (unix) => {
    const options = { weekday: "long", day: "numeric" };
    const date = new Date(unix * 1000);
    const espDate = date.toLocaleDateString("es-ES", options);
    return espDate.charAt(0).toUpperCase() + espDate.slice(1);
  };
  return (
    <Paper style={{ margin: "0.5rem 0" }}>
      <Grid
        container
        item
        direction={"row"}
        alignItems='center'
        justify='center'
        xs={12}
      >
        <Grid item xs={3}>
          <Typography variant='subtitle2' align='center'>
            {unixToDate(time)}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt='Weather icon'
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant='subtitle2' align='center'>
            {weather[0].description.charAt(0).toUpperCase() +
              weather[0].description.slice(1)}
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography variant='h6' align='center'>
            {temp.day} °C
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DayFcast;
