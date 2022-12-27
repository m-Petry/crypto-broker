import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { Box } from "@mui/system";

function App() {
  return (
    <BrowserRouter>
      <Box
        bgcolor="#14161a"
        color="white"
        minHeight="100vh"
        display="flex"
        flexDirection="row"
        minWidth={window.innerWidth}
      >
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
        </div>
      </Box>
    </BrowserRouter>
  );
}
export default App;
