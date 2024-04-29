import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../ui/table";
import { Button } from "../ui/button";

export default function Component() {
  return (
    <div className="bg-[#1e1e1e] text-white p-8">
      <h2 className="text-3xl font-semibold mb-6">
        Today's Cryptocurrency Prices
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            <TableHead className="text-left">#</TableHead>
            <TableHead className="text-left">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>24H Change</TableHead>
            <TableHead>24H Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <StarIcon className="text-yellow-400" />
            </TableCell>
            <TableCell>1</TableCell>
            <TableCell>
              <div className="flex items-center">Bitcoin BTC</div>
            </TableCell>
            <TableCell>$63,583.50</TableCell>
            <TableCell className="text-green-400">+3.24%</TableCell>
            <TableCell>$36.14 B</TableCell>
            <TableCell>$1,254.36 B</TableCell>
            <TableCell>
              <Button className="bg-blue-600">Trade</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <StarIcon className="text-yellow-400" />
            </TableCell>
            <TableCell>2</TableCell>
            <TableCell>
              <div className="flex items-center">Ethereum ETH</div>
            </TableCell>
            <TableCell>$3,070.56</TableCell>
            <TableCell className="text-green-400">+2.47%</TableCell>
            <TableCell>$15.32 B</TableCell>
            <TableCell>$370.01 B</TableCell>
            <TableCell>
              <Button className="bg-blue-600">Trade</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <StarIcon className="text-yellow-400" />
            </TableCell>
            <TableCell>3</TableCell>
            <TableCell>
              <div className="flex items-center">Tether USDT</div>
            </TableCell>
            <TableCell>$1.00</TableCell>
            <TableCell className="text-red-400">-0.17%</TableCell>
            <TableCell>$63.79 B</TableCell>
            <TableCell>$109.23 B</TableCell>
            <TableCell>
              <Button className="bg-blue-600">Trade</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <StarIcon className="text-yellow-400" />
            </TableCell>
            <TableCell>4</TableCell>
            <TableCell>
              <div className="flex items-center">BNB BNB</div>
            </TableCell>
            <TableCell>$553.11</TableCell>
            <TableCell className="text-green-400">+2.52%</TableCell>
            <TableCell>$1.44 B</TableCell>
            <TableCell>$82.55 B</TableCell>
            <TableCell>
              <Button className="bg-blue-600">Trade</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <StarIcon className="text-yellow-400" />
            </TableCell>
            <TableCell>5</TableCell>
            <TableCell>
              <div className="flex items-center">Solana SOL</div>
            </TableCell>
            <TableCell>$142.19</TableCell>
            <TableCell className="text-green-400">+7.40%</TableCell>
            <TableCell>$4.21 B</TableCell>
            <TableCell>$64.22 B</TableCell>
            <TableCell>
              <Button className="bg-blue-600">Trade</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
