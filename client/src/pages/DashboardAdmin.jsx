import { useContext, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { AdminContext } from "./Admin";
import { FaUsers, FaFileInvoiceDollar, FaBoxes } from "react-icons/fa";
import { IoIosShirt } from "react-icons/io";
import { Link } from "react-router-dom";

export default function DashboardAdmin() {
  const { products, user, orders, stocks } = useContext(AdminContext);
  // const [countStatus, setCountStatus] = useState({});

  const countStatus = orders?.reduce((accumulator, order) => {
    const { status } = order;
    accumulator[status] = (accumulator[status] || 0) + 1;
    return accumulator;
  }, {});

  console.log(countStatus);

  const totalStock = stocks.reduce((total, stock) => {
    return total + parseInt(stock.quantity);
  }, 0);

  const chartRef = useRef();

  // const { theme } = useContext(AdminContext);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Processed", "Shipped", "Finished"],
        datasets: [
          {
            label: "Orders",
            data: [
              countStatus?.Processed,
              countStatus?.Shipped,
              countStatus?.Finished,
            ],
            fill: false,
            backgroundColor: [
              "rgba(255, 159, 64, 0.7)",
              "rgba(0, 157, 254, 0.7)",
              "rgba(0, 251, 5, 0.7)",
            ],
            borderColor: [
              "rgb(255, 159, 64)",
              "rgb(0, 157, 254)",
              "rgb(0, 251, 5)",
            ],
            tension: 1,
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
  }, [countStatus?.Finished, countStatus?.Processed, countStatus?.Shipped]);
  return (
    <div className={`flex-1 `}>
      {/* Main Content */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Product Count */}
          <Link
            to="/admin/product"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer  border-black border-2"
          >
            <IoIosShirt className="text-7xl" />
            <p className="text-4xl font-bold">{products?.length}</p>
            <h3 className="text-2xl font-bold">Products</h3>
          </Link>
          {/* User Count */}
          <Link
            to="/admin/user"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer border-black border-2"
          >
            <FaUsers className="text-7xl" />
            <p className="text-4xl font-bold">{user?.length}</p>
            <h3 className="text-2xl font-bold">Users</h3>
          </Link>
          {/* Order Count */}
          <Link
            to="/admin/order"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer border-black border-2"
          >
            <FaFileInvoiceDollar className="text-7xl" />
            <p className="text-4xl font-bold">{orders?.length}</p>
            <h3 className="text-2xl font-bold">Orders</h3>
          </Link>
          {/* Stock Count */}
          <Link
            to="/admin/stock"
            className="flex flex-col items-center gap-2 bg-white p-2 rounded-lg shadow-xl cursor-pointer border-black border-2"
          >
            <FaBoxes className="text-7xl" />
            <p className="text-4xl font-bold">{totalStock}</p>
            <h3 className="text-2xl font-bold">Stocks</h3>
          </Link>
        </div>
        {/* Sales Chart */}
        <div className="mt-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Order Chart</h3>
            <canvas className="w-10" ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
