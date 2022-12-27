import {
  AppBar,
  Box,
  MenuItem,
  Select,
  Toolbar,
  Typography
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // Creates the route for homepage
  const navigate = useNavigate();

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            style={{
              flex: 1,
              color: "gold",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              cursor: "pointer"
            }}
            onClick={() => navigate("/")}
          >
            Crypto Broker
          </Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 15,
              cursor: "pointer"
            }}
            value={"USD"}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"BRL"}>BRL</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
