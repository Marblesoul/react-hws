import { useEffect, useState } from 'react';
import { prepareMonthList, prepareSortedList, prepareYearList } from './prepareData.js';

function YearTable({ list }) {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SortTable({ list }) {
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={`${item.date}-${item.amount}`}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MonthTable({ list }) {
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.month}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function withPreparedData(Component, prepareList) {
  return function WithPreparedData({ list }) {
    return <Component list={prepareList(list)} />;
  };
}

const PreparedMonthTable = withPreparedData(MonthTable, prepareMonthList);
const PreparedYearTable = withPreparedData(YearTable, prepareYearList);
const PreparedSortTable = withPreparedData(SortTable, prepareSortedList);

export default function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      try {
        const response = await fetch(import.meta.env.VITE_AGGREGATION_DATA_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Ошибка загрузки данных: ${response.status}`);
        }

        const data = await response.json();
        setList(data.list);
      } catch (currentError) {
        if (currentError.name !== 'AbortError') {
          setError(currentError.message);
        }
      }
    }

    loadData();

    return () => controller.abort();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div id="app">
      <PreparedMonthTable list={list} />
      <PreparedYearTable list={list} />
      <PreparedSortTable list={list} />
    </div>
  );
}
