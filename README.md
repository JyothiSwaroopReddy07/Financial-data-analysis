

# **Apple Financial Data Dashboard**

A responsive React application that displays Apple Inc.'s financial data with features like filtering and sorting. This application uses React Table for data handling, Framer Motion for animations, and Tailwind CSS for responsive design.

---

## **Features**

1. **Filter Financial Data**
   - Filter data by date range, revenue range, and net income range.

2. **Sorting**
   - Click on the table headers to sort by:
     - **Date** (ascending/descending)
     - **Revenue** (ascending/descending)
     - **Net Income** (ascending/descending)

3. **Responsive Design**
   - Optimized for mobile, tablet, and desktop screens.

---

## **Technologies Used**

- **React**: Frontend framework
- **React Table**: For table rendering and sorting
- **Tailwind CSS**: For styling and responsiveness
- **Framer Motion**: For animations
- **API**: Financial data fetched from Financial Modeling Prep API

---

## **Installation Guide**

### 1. **Clone the Repository**

```bash
git clone https://github.com/JyothiSwaroopReddy07/Financial-data-analysis.git
cd Financial-data-analysis
```

### 2. **Install Dependencies**

Ensure you have **Node.js** and **npm** installed. Then, install the required packages:

```bash
npm install --force
```

### 3. **Set Up the API Key**

#### **How to Obtain the API Key**
1. Visit the [Financial Modeling Prep website](https://financialmodelingprep.com/).
2. Sign up for a free account.
3. Log in and go to your **dashboard** to obtain your API key.

#### **Add API Key to Environment Variables**
1. Create a `.env` file in the root directory of the project.
2. Add your API key as an environment variable:

```env
REACT_APP_API_KEY=your_api_key
```

Replace `your_api_key` with the API key you obtained.

### 4. **Start the Development Server**

Run the application locally:

```bash
npm start
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## **How to Use**

### 1. **Filtering Data**
- Enter a **start date** and **end date** to filter data by a specific date range.
- Specify the **minimum and maximum revenue** to filter results based on revenue.
- Specify the **minimum and maximum net income** to filter results based on net income.
- Click **Apply Filters** to apply the filters.
- Click **Reset Filters** to clear all filters.

### 2. **Sorting Data**
- Click on the table headers (**Date**, **Revenue**, or **Net Income**) to sort the data.
  - Clicking once sorts the data in **ascending** order.
  - Clicking again sorts the data in **descending** order.
  - A sort indicator (**🔼** for ascending and **🔽** for descending) appears next to the column being sorted.

---

## **Folder Structure**

```
apple-financial-dashboard/
│
├── public/
│   ├── apple.gif            # Background GIF for the app
│   ├── index.html           # Main HTML file
│
├── src/
│   ├── components/
│   │   ├── Table.js         # Table component
│   │   ├── Filter.js        # Filter component
│   │
│   ├── services/
│   │   ├── api.js           # API fetch logic
│   │
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point
│
├── .env                     # Environment variables
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind CSS configuration
├── README.md                # Documentation
```

---

## **Customization**

### Modify Default Sorting Behavior
To change the default sorting column or order:
1. Open `Table.js`.
2. Modify the initial state for sorting in the `useTable` configuration:

```javascript
const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = useTable(
  {
    columns,
    data,
    initialState: { sortBy: [{ id: "date", desc: false }] }, // Default: sort by Date (ascending)
  },
  useSortBy
);
```

---

## **Future Enhancements**

- Add export functionality to download filtered data as a CSV file.
- Introduce advanced filtering (e.g., by EPS or Operating Income).
- Add a light/dark mode toggle.

---

## **License**

This project is open-source and available under the [MIT License](LICENSE).

---
