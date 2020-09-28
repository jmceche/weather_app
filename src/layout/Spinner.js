import React from "react";
import spinner from "./spinner_transparent.gif";
import { Grid } from "@material-ui/core";

const Spinner = () => {
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      style={{ height: "100vh" }}
    >
      <Grid item>
        <img src={spinner} alt='loading...' />
      </Grid>
    </Grid>
  );
};

export default Spinner;
