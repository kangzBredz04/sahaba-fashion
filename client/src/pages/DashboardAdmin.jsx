import { useContext, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { AdminContext } from "./Admin";

export default function DashboardAdmin() {
  const productCount = 100;
  const userCount = 50;
  const stockCount = 500;

  const chartRef = useRef();

  const { theme } = useContext(AdminContext);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Sales",
            data: [25, 39, 40, 31, 26, 15, 10],
            fill: false,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            tension: 0.1,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);
  return (
    <div
      className={`flex-1 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Main Content */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Product Count */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Products</h3>
            <p className="text-3xl font-bold">{productCount}</p>
          </div>
          {/* User Count */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Users</h3>
            <p className="text-3xl font-bold">{userCount}</p>
          </div>
          {/* Stock Count */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Stock</h3>
            <p className="text-3xl font-bold">{stockCount}</p>
          </div>
        </div>
        {/* Sales Chart */}
        <div className="mt-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Sales Chart</h3>
            <canvas className="w-10" ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
