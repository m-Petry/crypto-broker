import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Carousel from "./Carousel";

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
      <Container>
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
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
