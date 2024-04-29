"use client";
import { useContext, createContext, useState, useEffect } from "react";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [top100Coins, setTop100Coins] = useState([]);
  const [topMovers, setTopMovers] = useState(null);
  const [bottomMovers, setBottomMovers] = useState(null);
  const [globalData, setGlobalData] = useState(null);

  // Function to fetch data for the top 100 coins
  async function fetchTop100Coins() {
    try {
      const response = await fetch("/api/crypto-data");
      console.log("Fetching top 100 coins... FROM FETCH response", response);

      if (!response.ok) {
        throw new Error("Failed to fetch top 100 coins");
      }

      const data = await response.json();
      setTop100Coins(data);
      console.log("Top 100 coins data fetched:", data);
    } catch (error) {
      console.error("Error fetching top 100 coins:", error);
    }
  }

  // Function to fetch data for top and bottom movers
  async function fetchAllMovers() {
    try {
      const response = await fetch("/api/top-movers");
      console.log(
        "Fetching top and bottom movers... FROM FETCH response",
        response
      );

      if (!response.ok) {
        throw new Error("Failed to fetch top and bottom movers");
      }

      const data = await response.json();
      setTopMovers(data.top5Coins);
      setBottomMovers(data.bottom5Coins);
      console.log("Top movers data fetched:", data.top5Coins);
      console.log("Bottom movers data fetched:", data.bottom5Coins);
    } catch (error) {
      console.error("Error fetching top and bottom movers:", error);
    }
  }

  // Function to fetch global market metrics data
  async function fetchGlobalData() {
    try {
      const response = await fetch("/api/header-data");
      console.log(
        "Fetching global market data... FROM FETCH response",
        response
      );

      if (!response.ok) {
        throw new Error("Failed to fetch global market data");
      }

      const data = await response.json();
      setGlobalData(data);
      console.log("Global market data fetched:", data);
    } catch (error) {
      console.error("Error fetching global market data:", error);
    }
  }

  useEffect(() => {
    console.log("Fetching data... FROM LOAD");
    fetchTop100Coins(); // Fetch top 100 coins data
    fetchAllMovers(); // Fetch top and bottom movers data
    fetchGlobalData(); // Fetch global market metrics data
  }, []);

  return (
    <APIContext.Provider
      value={{
        top100Coins,
        topMovers,
        bottomMovers,
        globalData,
        fetchTop100Coins,
        fetchAllMovers,
        fetchGlobalData,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useAPIContext = () => {
  return useContext(APIContext);
};
