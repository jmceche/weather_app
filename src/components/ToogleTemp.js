import React, { useState } from "react";
import { Typography, Grid, Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 44,
    height: 23,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(18px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.common.white,
      },
    },
  },
  thumb: {
    width: 20,
    height: 20,
    boxShadow: "none",
    borderRadius: 0,
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 0,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
}))(Switch);

const ToogleTemp = () => {
  const handleChange = () => {};

  return (
    <Typography component='div'>
      <Grid component='label' container alignItems='center' spacing={1}>
        <Grid item>°C</Grid>
        <Grid item>
          <AntSwitch
            /* checked={state.checkedC} */
            onChange={handleChange}
            name='checked'
          />
        </Grid>
        <Grid item>°F</Grid>
      </Grid>
    </Typography>
  );
};

export default ToogleTemp;
