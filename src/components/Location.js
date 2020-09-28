import React from "react";
import { Typography } from "@material-ui/core";

const Location = ({ userCity, userCountry }) => {
  return (
    <Typography variant='h2' align='center'>
      {`${userCity}, ${userCountry}`}
    </Typography>
  );
};

export default Location;
