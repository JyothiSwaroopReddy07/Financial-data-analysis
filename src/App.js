import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchIncomeStatements } from "./services/api";
import Table from "./component/Table";
import Filter from "./component/Filter";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchIncomeStatements()
      .then((fetchedData) => {
        const formattedData = fetchedData.map((item) => ({
          ...item,
          revenue: Number(item.revenue),
          netIncome: Number(item.netIncome),
          date: item.date,
        }));
        setData(formattedData);
        setFilteredData(formattedData);
      })
      .catch((err) => console.error("Error fetching income statements:", err));
  }, []);

  const applyFilters = (filters) => {
    let filtered = [...data];

    if (filters.dateRange.start && filters.dateRange.end) {
      filtered = filtered.filter(
        (item) =>
          item.date >= filters.dateRange.start && item.date <= filters.dateRange.end
      );
    }

    if (filters.revenueRange.min || filters.revenueRange.max) {
      filtered = filtered.filter(
        (item) =>
          item.revenue >= (Number(filters.revenueRange.min) || 0) &&
          item.revenue <= (Number(filters.revenueRange.max) || Infinity)
      );
    }

    if (filters.netIncomeRange.min || filters.netIncomeRange.max) {
      filtered = filtered.filter(
        (item) =>
          item.netIncome >= (Number(filters.netIncomeRange.min) || 0) &&
          item.netIncome <= (Number(filters.netIncomeRange.max) || Infinity)
      );
    }

    setFilteredData(filtered);
  };

  const resetFilters = () => {
    setFilteredData(data);
  };

  return (
    <div
      className="flex items-center justify-center w-screen min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/apple.gif')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="p-4 sm:p-6 space-y-6 bg-gray-400 shadow-lg rounded-lg w-full max-w-3xl lg:max-w-5xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <Filter setFilters={applyFilters} resetFilters={resetFilters} />
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        >
          <Table data={filteredData} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
