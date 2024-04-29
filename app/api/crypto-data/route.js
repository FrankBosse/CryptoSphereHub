const API_KEY = process.env.COIN_MARKET_CAP_API_KEY;

export async function GET() {
  try {
    // Fetch data for the top 100 cryptocurrencies
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100&convert=USD`,
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

    // Extract the required information for each coin
    const coinsList = data.data.map((coin) => {
      const { cmc_rank, name, symbol, quote } = coin;
      const currentPrice = quote.USD.price;
      const priceChange24h = quote.USD.percent_change_24h;
      const volume24h = quote.USD.volume_24h;
      const marketCap = quote.USD.market_cap;

      // Return an object with the desired information
      return {
        rank: cmc_rank,
        name,
        symbol,
        currentPrice,
        priceChange24h,
        volume24h,
        marketCap,
      };
    });

    // Return the list of coins as JSON
    return new Response(JSON.stringify(coinsList));
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
