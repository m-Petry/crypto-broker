import { Box } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";
import { TrendingCoins } from "../Config/Api";
import { CryptoState } from "../CryptoContext";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    setTrending(data);
  };

  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <Box
      sx={{
        height: "50%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div>Carousel</div>;
    </Box>
  );
};

export default Carousel;
