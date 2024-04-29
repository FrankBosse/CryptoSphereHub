const API_KEY = process.env.COIN_MARKET_CAP_API_KEY;

export async function GET() {
  try {
    // Fetch the latest global market metrics
    const response = await fetch(
      "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
        },
      }
    );

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
        status: 500,
      });
    }

    const data = await response.json();

    // Extract the required information from the data
    const globalData = data.data.quote.USD;
    const activeCryptoCurrencies = data.data.active_cryptocurrencies;
    const totalMarketCap = globalData.total_market_cap;
    const totalMarketCapYesterdayPercentageChange =
      globalData.total_market_cap_yesterday_percentage_change;
    const totalVolume24h = globalData.total_volume_24h;
    const btcDominance = data.data.btc_dominance;
    const ethDominance = data.data.eth_dominance;

    // Create an object with the desired data
    const metrics = {
      activeCryptoCurrencies,
      totalMarketCap,
      totalMarketCapYesterdayPercentageChange,
      totalVolume24h,
      btcDominance,
      ethDominance,
    };

    // Return the metrics as JSON
    return new Response(JSON.stringify(metrics));
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
