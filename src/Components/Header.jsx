import { AppBar, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  // Creates the route for homepage
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState;

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
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
                marginRight: 15,
                cursor: "pointer",
                color: "white",
                border: "1px solid white"
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={currency}>{currency}</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"BRL"}>BRL</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
