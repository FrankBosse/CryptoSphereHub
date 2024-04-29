import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../ui/table";
import { Button } from "../ui/button";
import { useAPIContext } from "../../app/_utils/API-Context";
import { useState } from "react";

export default function TodaysPriceTable() {
  // Access the API context to get the list of top 100 coins
  const { top100Coins } = useAPIContext();

  // State to manage the current page and number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Function to format large numbers with commas as thousands separators and no decimal places
  function formatNumber(number) {
    return number.toLocaleString("en-US", { minimumFractionDigits: 0 });
  }

  // Function to handle page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= 10) {
      setCurrentPage(page);
    }
  };

  // Slice the top100Coins array to get only the items for the current page
  const currentCoins = top100Coins.slice(startIndex, endIndex);

  return (
    <div className="bg-[#0d1117] text-white p-8">
      <div className="container mx-auto px-6 py-3">
        <h2 className="text-3xl font-semibold mb-6">
          Today's Cryptocurrency Prices
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead style={{ width: "80px" }} />
              <TableHead className="text-center" style={{ width: "80px" }}>
                #
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">24H Change</TableHead>
              <TableHead className="text-right">24H Volume</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentCoins.map((coin) => (
              <TableRow key={coin.rank}>
                <TableCell style={{ width: "40px" }}>
                  <StarIcon className="ml-5 text-yellow-400" />
                </TableCell>
                <TableCell className="text-center" style={{ width: "40px" }}>
                  {coin.rank}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {coin.name}
                    <p className="text-[#58a6ff] ml-2">{coin.symbol}</p>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${coin.currentPrice.toFixed(2)}
                </TableCell>
                <TableCell
                  className={
                    coin.priceChange24h > 0
                      ? "text-right text-green-400"
                      : "text-right text-red-400"
                  }
                >
                  {coin.priceChange24h > 0 ? "+" : ""}
                  {coin.priceChange24h.toFixed(2)}%
                </TableCell>
                <TableCell className="text-right">
                  ${formatNumber(coin.volume24h)}
                </TableCell>
                <TableCell className="text-right">
                  ${formatNumber(coin.marketCap)}
                </TableCell>
                <TableCell>
                  <Button className="bg-blue-600">Trade</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4 space-x-2">
          <Button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          {/* Generate buttons for pages */}
          {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => goToPage(page)}
              // Apply conditional class to highlight the active page
              variant={currentPage === page ? "pageSelected" : ""}
            >
              {page}
            </Button>
          ))}
          <Button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === 10}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
