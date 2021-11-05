import React, { Fragment } from "react";
import DayFCast from "./DayFcast";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "auto",
  },

  separation: {
    padding: "2rem",
  },
  margin: {
    margin: "2rem",
  },
}));

const DailyForecast = ({ forecastWeather }) => {
  const classes = useStyles();
  const { daily } = forecastWeather;
  return (
    <Fragment>
      <Typography variant='h4' align='center' className={classes.separation}>
        Próximos días
      </Typography>

      <Grid item container direction={"column"} justify='center' spacing={1}>
        {daily.map((day) => (
          <DayFCast
            key={day.dt}
            time={day.dt}
            temp={day.temp}
            feel={day.feels_like}
            humidity={day.humidity}
            weather={day.weather}
            pressure={day.pressure}
          />
        ))}
      </Grid>
    </Fragment>
  );
};

export default DailyForecast;
