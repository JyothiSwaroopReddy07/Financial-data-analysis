import React, { useState } from "react";

const Filter = ({ setFilters, resetFilters }) => {
  const [filters, setLocalFilters] = useState({
    dateRange: { start: "", end: "" },
    revenueRange: { min: "", max: "" },
    netIncomeRange: { min: "", max: "" },
  });

  const handleChange = (field, type, value) => {
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [field]: {
        ...prevFilters[field],
        [type]: value,
      },
    }));
  };

  const handleApplyFilters = () => {
    setFilters(filters);
  };

  const handleResetFilters = () => {
    setLocalFilters({
      dateRange: { start: "", end: "" },
      revenueRange: { min: "", max: "" },
      netIncomeRange: { min: "", max: "" },
    });
    resetFilters();
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8 space-y-6">
  <h2 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold text-gray-800">
    Apple Revenue Data
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Date Range Inputs */}
    <div>
      <label className="block text-sm sm:text-base font-medium text-gray-700">
        Start Date
      </label>
      <input
        type="date"
        value={filters.dateRange.start}
        onChange={(e) => handleChange("dateRange", "start", e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
      />
    </div>
    <div>
      <label className="block text-sm sm:text-base font-medium text-gray-700">
        End Date
      </label>
      <input
        type="date"
        value={filters.dateRange.end}
        onChange={(e) => handleChange("dateRange", "end", e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
      />
    </div>

    {/* Revenue Range Inputs */}
    <div>
      <label className="block text-sm sm:text-base font-medium text-gray-700">
        Min Revenue
      </label>
      <input
        type="number"
        value={filters.revenueRange.min}
        onChange={(e) => handleChange("revenueRange", "min", e.target.value)}
        placeholder="e.g. 100000"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
      />
    </div>
    <div>
      <label className="block text-sm sm:text-base font-medium text-gray-700">
        Max Revenue
      </label>
      <input
        type="number"
        value={filters.revenueRange.max}
        onChange={(e) => handleChange("revenueRange", "max", e.target.value)}
        placeholder="e.g. 1000000"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
      />
    </div>

    {/* Net Income Range Inputs */}
    <div>
      <label className="block text-sm sm:text-base font-medium text-gray-700">
        Min Net Income
      </label>
      <input
        type="number"
        value={filters.netIncomeRange.min}
        onChange={(e) => handleChange("netIncomeRange", "min", e.target.value)}
        placeholder="e.g. 50000"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
      />
    </div>
    <div>
      <label className="block text-sm sm:text-base font-medium text-gray-700">
        Max Net Income
      </label>
      <input
        type="number"
        value={filters.netIncomeRange.max}
        onChange={(e) => handleChange("netIncomeRange", "max", e.target.value)}
        placeholder="e.g. 500000"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
      />
    </div>
  </div>

  <div className="flex flex-col justify-center sm:flex-row gap-4">
    <button
      onClick={handleApplyFilters}
      className="w-full sm:w-auto bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
    >
      Apply Filters
    </button>
    <button
      onClick={handleResetFilters}
      className="w-full sm:w-auto bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition"
    >
      Reset Filters
    </button>
  </div>
</div>

  );
};

export default Filter;
