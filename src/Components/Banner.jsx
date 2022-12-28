import { Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        background: "url(../banner2.jpg)",
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "center"
      }}
    >
      <Typography
        variant="h2"
        style={{
          fontWeight: "bold",
          marginBottom: 15,
          fontFamily: "Montserrat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Crypto Broker
      </Typography>
      <Typography
        variant="subtitle2"
        style={{
          color: "darkgrey",
          textTransform: "capitalize",
          fontFamily: "Montserrat",
          display: "flex",
          alignItems: "top",
          justifyContent: "center"
        }}
      >
        Get all the info regarding your favorite Crypto Coin
      </Typography>
    </div>
  );
};

export default Banner;
