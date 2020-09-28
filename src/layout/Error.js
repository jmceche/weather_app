import React from "react";
import { Container, Typography } from "@material-ui/core";

const Error = ({ msg }) => {
  return (
    <Container>
      <Typography
        variant='p'
        style={{
          background: "#ff0000",
          color: "white",
          fontFamily: "Roboto",
          textAlign: "center",
          padding: "1rem",
          lineHeight: "3",
        }}
      >
        {msg}
      </Typography>
    </Container>
  );
};

export default Error;
