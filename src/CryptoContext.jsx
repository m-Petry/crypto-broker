import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";

const Crypto = createContext();

export const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("BRL");
  const [symbol, setSymbol] = useState("R$");

  useEffect(() => {
    if (currency === "BRL") setSymbol("R$");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export const CryptoState = () => {
  return useContext(Crypto);
};
