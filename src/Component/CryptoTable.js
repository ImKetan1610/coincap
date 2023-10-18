import React, { useState, useEffect } from "react";
import axios from "axios";

function CryptoTable() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    // Increase the page number to fetch the next page of cryptocurrencies
    setPage(page + 1);
  };

  useEffect(() => {
    // Fetch cryptocurrencies from CoinCap API
    axios
      .get(`https://api.coincap.io/v2/assets?limit=50&page=${page}`)
      .then((response) => {
        const newCryptocurrencies = response.data.data;
        console.log("newCryptocurrencies", newCryptocurrencies);
        setCryptocurrencies([...cryptocurrencies, ...newCryptocurrencies]);
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrencies:", error);
      });
  }, [page]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            {/* Add more table headers here */}
          </tr>
        </thead>
        <tbody>
          {cryptocurrencies.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.rank}</td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              {/* Display other cryptocurrency data here */}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default CryptoTable;
