import {useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true) 
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState(1);
  const [pay, setPay] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  const handleInput = (e) => {
    setPay(e.target.value)
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res) => res.json())
    .then((json) => {
      setCoins(json.slice(0, 10));
      setLoading(false);
    });
  }, [])
  return (
    <div>
     <h1>The Coins{loading ? "" : `(${coins.length})`}</h1>
     {loading ? <strong>Loading...</strong> : null}
     <div><input type="number" onChange={handleInput} value={pay}/><span>$</span></div>
     <select onChange={handleSelect} value={selected}>
      {coins.map((coin, index) => (
        <option 
        key={coin.id}
        value={coin.quotes.USD.price}
        >
          {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
        </option>

      ))}
     </select>
     <p>{pay/selected}</p>
    </div>
  );
}

export default App;
