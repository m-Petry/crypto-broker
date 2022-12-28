import { Box } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";
import { TrendingCoins } from "../Config/Api";
import { CryptoState } from "../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          cursor: "pointer",
          textTransform: "uppercase",
          color: "white"
        }}
      >
        <Link to={`/coins/${coin.id}`}>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            // width="50"
            style={{
              marginBottom: 10
            }}
          />
        </Link>
      </Box>
    );
  });

  const responsive = {
    0: {
      items: 2
    },
    512: {
      items: 4
    }
  };

  return (
    <Box
      sx={{
        height: "50%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </Box>
  );
};

export default Carousel;
