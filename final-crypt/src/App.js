import React, { useState, useEffect} from "react";
import CoinCard from "./components/CoinCard";
import Heading from "./UI/Heading";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Typography from "./UI/Typography";
function App() {
  const [coins, setCoins] = useState([]);
  const [searchItem, setSearchItem] = useState('')
  const [filteredCoins, setFilteredCoins] = useState(coins)
  const [loading, setLoading] = useState(true);

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  

  const filteredItems = coins.filter((coin) =>
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  ||
   coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCoins(filteredItems);
  }
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
  return(
    <div className="coin-container">
      <Heading level={1}>Cryptocurrency Prices</Heading>
      
      <Button variant = "bordered" size="sm" onClick={fetchCoins}>Update</Button>
      <Input placeholder="Search" value={searchItem} onChange={handleInputChange}></Input>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
      filteredCoins.map((coin) => (
        <CoinCard data={coin} />
      ))
      )}
    </div>
  );
}

export default App;
