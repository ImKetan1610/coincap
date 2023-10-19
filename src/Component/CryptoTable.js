import React, { useState, useEffect } from "react";
import axios from "axios";
import "./crypto.css";
import { Box } from "@mui/material";
import data from "../Data/cryptoData";

function CryptoTable() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // added logic for data stored below this line
  const ItemsPerPage = 50;
  const paginateData = (data, currentPage, ItemsPerPage) => {
    const start = (page - 1) * ItemsPerPage;
    const end = start + ItemsPerPage;
    return data.slice(start, end);
  };
  // added logic for data stored above this line
  const loadMore = () => {
    // Increase the page number to fetch the next page of cryptocurrencies
    setPage(page + 1);
  };

  const getData = (currentPage) => {
    /*
    axios
      .get(`https://api.coincap.io/v2/assets?limit=50&page=${currentPage}`)
      .then((response) => {
        const newCryptocurrencies = response.data.data;
        console.log("<<<<<<<<<<<<<<<<<<", newCryptocurrencies);
        setCryptocurrencies([...cryptocurrencies, ...newCryptocurrencies]); // Reset cryptocurrencies with new data
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching cryptocurrencies:", error);
        setLoading(false);
      });
      */
    const newData = paginateData(data, page, ItemsPerPage);
    setTimeout(() => {
      setCryptocurrencies([...cryptocurrencies, ...newData]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Fetch cryptocurrencies from CoinCap API
    setLoading(true);
    getData(page);
  }, [page]);

  const percentColor = (changePercent) => {
    if (changePercent < 0) {
      return { color: "red" };
    }
    return { color: "green" };
  };

  return (
    <div style={{ padding: "0 5rem 0 5rem" }}>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>VWAP(24 hr)</th>
            <th>Supply</th>
            <th>Volume</th>
            <th>Change</th>
            {/* Add more table headers here */}
          </tr>
        </thead>
        <tbody>
          {cryptocurrencies.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.rank}</td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{Number(crypto.priceUsd).toFixed(2)}</td>
              <td>{Number(crypto.marketCapUsd).toFixed(2)}</td>
              <td>{Number(crypto.vwap24Hr).toFixed(2)}</td>
              <td>{Number(crypto.supply).toFixed(2)}</td>
              <td>{Number(crypto.volumeUsd24Hr).toFixed(2)}</td>
              <td style={percentColor(crypto.changePercent24Hr)}>
                {Number(crypto.changePercent24Hr).toFixed(2)}%
              </td>
              {/* Display other cryptocurrency data here */}
            </tr>
          ))}
        </tbody>
      </table>
      <Box style={{ marginBottom: "5rem", marginTop: "-5rem" }}>
        {loading ? (
          <>
            <img
              alt="Loader"
              width="50px"
              src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif"
            />
            <h3>Loading...</h3>
          </>
        ) : (
          <button onClick={loadMore}>Load More</button>
        )}
      </Box>
    </div>
  );
}

export default CryptoTable;
