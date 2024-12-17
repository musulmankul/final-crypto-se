import React, { useState, useEffect } from "react";
import CoinCard from "./components/CoinCard";
import Heading from "./UI/Heading";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Typography from "./UI/Typography";

function App() {
  const [coins, setCoins] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCoins = () => {
    setLoading(true);
    fetch("https://api.coinlore.net/api/tickers/")
      .then((res) => res.json())
      .then((data) => setCoins(data.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const filteredCoins = coins.filter((coin) => coin.name.includes(searchItem) || coin.symbol.includes(searchItem))

  return (
    <div className="coin-container">
      <Heading level={1}>Cryptocurrency Prices</Heading>
      <Button variant="bordered" size="sm" onClick={fetchCoins}>
        Update
      </Button>
      <Input
        placeholder="Search"
        value={searchItem}
        onChange={setSearchItem}
      ></Input>
      {loading ? (
        <Typography>Loading</Typography>
      ) : (
        filteredCoins.map((coin) => <CoinCard data={coin} />)
      )}
    </div>
  );
}

export default App;
