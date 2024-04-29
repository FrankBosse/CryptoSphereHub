"use client";
import Header from "../components/component/header";
import TopMoversCards from "../components/component/top-movers-cards";
import TodaysPriceTable from "../components/component/todays-price-table";

export default function Page() {
  return (
    <div>
      <Header />
      <TopMoversCards />
      <TodaysPriceTable />
    </div>
  );
}
