/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fTS2IbTLJ75
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { useAPIContext } from "../../app/_utils/API-Context";

export default function TopMoversCards() {
  // Get the topMovers and bottomMovers data from API context
  const { topMovers, bottomMovers } = useAPIContext();

  // Render cards for each coin in the topMovers data
  return (
    <div className="bg-[#0d1117] p-4">
      {/* Top Movers Section */}
      <div className="container mx-auto px-6 py-3">
        <h2 className="text-white text-lg font-bold mb-3">Top Movers</h2>
        <div className="flex overflow-x-auto space-x-4">
          {topMovers &&
            topMovers.map((coin, index) => (
              <Card key={index} className="bg-[#161b22] w-[220px] p-3">
                <div className="flex items-center mb-2">
                  {/* <Avatar>
                    <AvatarImage
                      alt={coin.symbol}
                      src="/placeholder.svg?height=40&width=40"
                    />
                  </Avatar> */}
                  <div className="ml-2">
                    <h3 className="text-white font-semibold">{coin.name}</h3>
                    <div className="text-[#58a6ff]">{coin.symbol}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-white font-bold">
                    ${coin.currentPrice.toFixed(4)}
                  </div>
                  <Badge
                    variant={coin.priceChange24h > 0 ? "positive" : "negative"}
                  >
                    {coin.priceChange24h > 0 ? "+" : ""}
                    {coin.priceChange24h.toFixed(2)}%
                  </Badge>
                </div>
              </Card>
            ))}
        </div>
      </div>

      {/* Bottom Movers Section */}
      <div className="container mx-auto px-6 py-3">
        <h2 className="text-white text-lg font-bold mb-3">Bottom Movers</h2>
        <div className="flex overflow-x-auto space-x-4">
          {bottomMovers &&
            bottomMovers.map((coin, index) => (
              <Card key={index} className="bg-[#161b22] w-[220px] p-3">
                <div className="flex items-center mb-2">
                  {/* <Avatar>
                    <AvatarImage
                      alt={coin.symbol}
                      src="/placeholder.svg?height=40&width=40"
                    />
                  </Avatar> */}
                  <div className="ml-2">
                    <h3 className="text-white font-semibold">{coin.name}</h3>
                    <div className="text-[#58a6ff]">{coin.symbol}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-white font-bold">
                    ${coin.currentPrice.toFixed(4)}
                  </div>
                  <Badge
                    variant={coin.priceChange24h > 0 ? "positive" : "negative"}
                  >
                    {coin.priceChange24h > 0 ? "+" : ""}
                    {coin.priceChange24h.toFixed(2)}%
                  </Badge>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
