// import axios from "axios";

// // CoinMarketCap API key
// const apiKey = "f60a4025-36ab-4aff-beec-b7e069df952d";

// export default async function handler(req, res) {
//   try {
//     const response = await axios.get(
//       "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
//       {
//         headers: {
//           "X-CMC_PRO_API_KEY": apiKey,
//         },
//         params: {
//           start: 1,
//           limit: 1,
//           convert: "USD",
//           slugh: "bitcoin",
//         },
//       }
//     );

//     const bitcoinData = response.data.data[0];
//     const price = bitcoinData.quote.USD.price;
//     res.status(200).json({ price });
//   } catch (err) {
//     console.error("Error fetching Bitcoin price:", err);
//     res.status(500).json({ error: "Error fetching Bitcoin price" });
//   }
// }
