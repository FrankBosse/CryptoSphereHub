const API_KEY = process.env.COIN_MARKET_CAP_API_KEY;

export async function GET() {
  try {
    // Fetch the top 5 movers
    const topMoversResponse = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?volume_24h_min=100000&price_min=0.1&sort=percent_change_24h&sort_dir=desc&limit=10&convert=USD`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
        },
      }
    );

    if (!topMoversResponse.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
        status: 500,
      });
    }

    // Parse the response and get top 5 coins
    const topMoversData = await topMoversResponse.json();
    const top5Coins = topMoversData.data.map((coin) => {
      const { name, symbol, quote } = coin;
      const currentPrice = quote.USD.price;
      const priceChange24h = quote.USD.percent_change_24h;

      return {
        name,
        symbol,
        currentPrice,
        priceChange24h,
      };
    });

    // Fetch the bottom 5 movers
    const bottomMoversResponse = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?volume_24h_min=100000&price_min=0.1&sort=percent_change_24h&sort_dir=asc&limit=10&convert=USD`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
        },
      }
    );

    if (!bottomMoversResponse.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
        status: 500,
      });
    }

    // Parse the response and get bottom 5 coins
    const bottomMoversData = await bottomMoversResponse.json();
    const bottom5Coins = bottomMoversData.data.map((coin) => {
      const { name, symbol, quote } = coin;
      const currentPrice = quote.USD.price;
      const priceChange24h = quote.USD.percent_change_24h;

      return {
        name,
        symbol,
        currentPrice,
        priceChange24h,
      };
    });

    // Return both top 5 and bottom 5 coins as JSON
    return new Response(JSON.stringify({ top5Coins, bottom5Coins }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
