import { useEffect, useState } from "react";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import Card, { CardContent } from "@/components/Card";
import SalesCard from "@/components/SalesChart";
import Sidenavbar from "@/components/ui/Sidenavbar";
import BarChart from "@/components/BarChart";

interface CardData {
  label: string;
  amount: string;
  description: string;
  icon: string;
}

interface UserSalesData {
  name: string;
  email: string;
  saleAmount: string;
}

export default function Home() {
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [userSalesData, setUserSalesData] = useState<UserSalesData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTuGDdm9jBZw5pSJ_C_rEkMjqyspe4bGu7JD1C7yxG-K4ylfwLYLoyog_QbJWwQBynS1s164Ga6CmJy/pub?output=csv"
      );
      const text = await response.text();
      const data = text.split("\n").map((row) => row.split(","));

      // Assuming the first row is headers
      const [headerRow, ...rows] = data;

      const fetchedCardData: CardData[] = rows.map((row) => ({
        label: row[0],
        amount: row[1],
        description: row[2],
        icon: row[3],
      }));

      setCardData(fetchedCardData);

      const fetchedUserSalesData: UserSalesData[] = rows.map((row) => ({
        name: row[4],
        email: row[5],
        saleAmount: row[6],
      }));

      setUserSalesData(fetchedUserSalesData);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white flex">
      <Sidenavbar />
      <div className="flex flex-col gap-5 w-full p-5">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
          {cardData.map((d, i) => (
            <Card
              key={i}
              amount={d.amount}
              description={d.description}
              icon={
                d.icon === "DollarSign"
                  ? DollarSign
                  : d.icon === "Users"
                  ? Users
                  : d.icon === "CreditCard"
                  ? CreditCard
                  : Activity
              }
              label={d.label}
            />
          ))}
        </section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Overview</p>
            <BarChart />
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Recent Sales</p>
              <p className="text-sm text-gray-400">
                You made {userSalesData.length} sales this month.
              </p>
            </section>
            {userSalesData.map((d, i) => (
              <SalesCard
                key={i}
                email={d.email}
                name={d.name}
                saleAmount={d.saleAmount}
              />
            ))}
          </CardContent>
        </section>
      </div>
    </div>
  );
}
